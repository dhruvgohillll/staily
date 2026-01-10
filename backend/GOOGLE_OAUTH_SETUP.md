# Google OAuth Setup Guide

This guide will help you set up Google OAuth authentication for the Staily backend.

## Prerequisites

1. A Google Cloud Platform (GCP) account
2. A GCP project with the Google+ API enabled

## Step 1: Create OAuth 2.0 Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. If prompted, configure the OAuth consent screen:
   - Choose **External** (unless you have a Google Workspace)
   - Fill in the required information (App name, User support email, Developer contact)
   - Add scopes: `email` and `profile`
   - Add test users if needed (for development)
6. Create OAuth client ID:
   - Application type: **Web application**
   - Name: Staily OAuth Client (or any name you prefer)
   - Authorized JavaScript origins:
     - `http://localhost:8080` (for development)
     - `https://yourdomain.com` (for production)
   - Authorized redirect URIs:
     - `http://localhost:8080/auth/google/callback` (for development)
     - `https://yourdomain.com/auth/google/callback` (for production)
7. Click **Create**
8. Copy the **Client ID** and **Client Secret**

## Step 2: Configure Backend Environment

Add the following to your `backend/.env` file:

```env
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
GOOGLE_REDIRECT_URI=http://localhost:8080/auth/google/callback
```

**Important Notes:**
- The `GOOGLE_REDIRECT_URI` should match exactly what you configured in Google Cloud Console
- For production, update the redirect URI to your production domain
- Never commit the `.env` file to version control

## Step 3: Install Dependencies

Make sure you've installed the Google Auth Library:

```bash
cd backend
npm install
```

## Step 4: Test the Integration

1. Start your backend server:
   ```bash
   npm run dev
   ```

2. Start your frontend:
   ```bash
   cd ..
   npm run dev
   ```

3. Click "Sign In" in the navbar
4. Click "Continue with Google"
5. You should be redirected to Google's OAuth consent screen
6. After authorizing, you'll be redirected back to your app and logged in

## API Endpoints

### GET `/api/auth/google/initiate`
Initiates the Google OAuth flow. Returns an authorization URL.

**Response:**
```json
{
  "authUrl": "https://accounts.google.com/o/oauth2/v2/auth?..."
}
```

### GET `/api/auth/google/callback`
Handles the OAuth callback from Google. Redirects to the frontend with a token.

**Query Parameters:**
- `code`: Authorization code from Google

**Redirects to:**
- Success: `{FRONTEND_URL}/auth/callback?token={JWT_TOKEN}&email={USER_EMAIL}`
- Error: `{FRONTEND_URL}/auth/callback?error=oauth_failed`

### POST `/api/auth/google/verify-token`
Verifies a Google ID token directly (alternative flow).

**Request Body:**
```json
{
  "idToken": "google-id-token-here"
}
```

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name",
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "token": "jwt-token-here"
}
```

## Troubleshooting

### "Redirect URI mismatch" error
- Ensure the redirect URI in your `.env` file matches exactly what's configured in Google Cloud Console
- Check for trailing slashes, `http` vs `https`, and port numbers

### "Invalid client" error
- Verify your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are correct
- Make sure you copied the credentials from the correct OAuth client

### OAuth consent screen issues
- Ensure you've completed the OAuth consent screen configuration
- For development, add test users in the consent screen settings
- Make sure the required scopes (email, profile) are added

### CORS errors
- Verify `CORS_ORIGIN` in your backend `.env` matches your frontend URL
- Check that the frontend URL is added to authorized JavaScript origins in Google Cloud Console

## Security Best Practices

1. **Never expose secrets**: Keep `GOOGLE_CLIENT_SECRET` secure and never commit it to version control
2. **Use HTTPS in production**: Always use HTTPS for OAuth redirects in production
3. **Validate tokens**: The backend automatically validates Google tokens before creating sessions
4. **Set proper scopes**: Only request the scopes you actually need
5. **Handle errors gracefully**: The OAuth flow includes error handling and redirects users appropriately

## Production Deployment

When deploying to production:

1. Update the OAuth consent screen to "In production" status
2. Add your production domain to authorized origins and redirect URIs
3. Update environment variables with production URLs
4. Ensure your production domain uses HTTPS
5. Consider adding additional security measures like rate limiting

