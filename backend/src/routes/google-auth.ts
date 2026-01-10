import { Router, Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { generateToken, sanitizeUser } from '../utils/auth.js';
import { findUserByEmail, findUserByGoogleId, createUser, updateUser } from '../utils/database.js';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Initialize Google OAuth client
const getGoogleClient = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI || `${process.env.CORS_ORIGIN || 'http://localhost:8080'}/auth/google/callback`;

  if (!clientId || !clientSecret) {
    throw new Error('Google OAuth credentials not configured');
  }

  return new OAuth2Client(clientId, clientSecret, redirectUri);
};

// Initiate Google OAuth flow
router.get('/initiate', (req: Request, res: Response) => {
  try {
    const client = getGoogleClient();
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ];

    const authUrl = client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      prompt: 'consent', // Force consent screen to get refresh token
    });

    res.json({ authUrl });
  } catch (error) {
    console.error('Google OAuth initiate error:', error);
    res.status(500).json({ error: 'Failed to initiate Google OAuth' });
  }
});

// Google OAuth callback
router.get('/callback', async (req: Request, res: Response) => {
  try {
    const { code } = req.query;

    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'Authorization code missing' });
    }

    const client = getGoogleClient();

    // Exchange code for tokens
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    // Get user info from Google
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ error: 'Failed to get user info from Google' });
    }

    const { sub: googleId, email, name, picture } = payload;

    if (!email) {
      return res.status(400).json({ error: 'Email not provided by Google' });
    }

    // Check if user exists by Google ID or email
    let user = findUserByGoogleId(googleId);
    
    if (!user) {
      // Check if user exists by email (might have signed up with email/password)
      const existingUser = findUserByEmail(email);
      
      if (existingUser) {
        // Update existing user to include Google OAuth info
        const updatedUser = updateUser(existingUser.id, {
          provider: 'google' as const,
          googleId,
        });
        user = updatedUser || existingUser;
      } else {
        // Create new user
        user = {
          id: uuidv4(),
          email,
          name: name || undefined,
          provider: 'google' as const,
          googleId,
          createdAt: new Date().toISOString(),
        };
        createUser(user);
      }
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    // Redirect to frontend with token
    const frontendUrl = process.env.CORS_ORIGIN || 'http://localhost:8080';
    const redirectUrl = `${frontendUrl}/auth/callback?token=${token}&email=${encodeURIComponent(user.email)}`;
    
    res.redirect(redirectUrl);
  } catch (error) {
    console.error('Google OAuth callback error:', error);
    const frontendUrl = process.env.CORS_ORIGIN || 'http://localhost:8080';
    res.redirect(`${frontendUrl}/auth/callback?error=oauth_failed`);
  }
});

// Verify Google token (for direct token verification)
router.post('/verify-token', async (req: Request, res: Response) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ error: 'ID token required' });
    }

    const client = getGoogleClient();
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      return res.status(400).json({ error: 'Invalid token' });
    }

    const { sub: googleId, email, name } = payload;

    if (!email) {
      return res.status(400).json({ error: 'Email not provided' });
    }

    // Find or create user
    let user = findUserByGoogleId(googleId);
    
    if (!user) {
      const existingUser = findUserByEmail(email);
      
      if (existingUser) {
        const updatedUser = updateUser(existingUser.id, {
          provider: 'google' as const,
          googleId,
        });
        user = updatedUser || existingUser;
      } else {
        user = {
          id: uuidv4(),
          email,
          name: name || undefined,
          provider: 'google' as const,
          googleId,
          createdAt: new Date().toISOString(),
        };
        createUser(user);
      }
    }

    const token = generateToken(user.id, user.email);

    res.json({
      user: sanitizeUser(user),
      token,
    });
  } catch (error) {
    console.error('Google token verification error:', error);
    res.status(500).json({ error: 'Failed to verify Google token' });
  }
});

export default router;

