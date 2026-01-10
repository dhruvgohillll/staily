import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { hashPassword, comparePassword, generateToken, sanitizeUser } from '../utils/auth.js';
import { findUserByEmail, createUser } from '../utils/database.js';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().optional(),
});

// Login endpoint
router.post('/login', async (req: Request, res: Response) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const { email, password } = validatedData;

    // Find user by email
    const user = findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify password
    if (!user.password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const token = generateToken(user.id, user.email);

    // Return user data (without password) and token
    res.json({
      user: sanitizeUser(user),
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Register endpoint
router.post('/register', async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const { email, password, name } = validatedData;

    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = {
      id: uuidv4(),
      email,
      password: hashedPassword,
      name: name || undefined,
      createdAt: new Date().toISOString(),
    };

    createUser(newUser);

    // Generate token
    const token = generateToken(newUser.id, newUser.email);

    // Return user data (without password) and token
    res.status(201).json({
      user: sanitizeUser(newUser),
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Verify token endpoint
router.get('/verify', async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token required' });
    }

    const { verifyToken } = await import('../utils/auth.js');
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    const { findUserById } = await import('../utils/database.js');
    const user = findUserById(decoded.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error('Verify error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

