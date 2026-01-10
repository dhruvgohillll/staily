# Fixing Node.js Backend Issues

## Issue Summary
The backend has TypeScript linter errors because dependencies are not installed. The `node_modules` folder is missing.

## Quick Fix Steps

### Option 1: Manual Installation (Recommended)
```bash
cd backend
npm install
```

### Option 2: Using the Install Script
```bash
cd backend
chmod +x install.sh
./install.sh
```

### Option 3: If you get permission errors
```bash
cd backend
npm install --legacy-peer-deps
```

## After Installation

1. **Create `.env` file** (if it doesn't exist):
```bash
cd backend
cp .env.example .env
# Or create manually with:
# PORT=3001
# JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
# NODE_ENV=development
# CORS_ORIGIN=http://localhost:8080
# GOOGLE_CLIENT_ID=your-google-client-id
# GOOGLE_CLIENT_SECRET=your-google-client-secret
# GOOGLE_REDIRECT_URI=http://localhost:8080/auth/google/callback
```

2. **Start the development server**:
```bash
npm run dev
```

## Troubleshooting

### Error: Cannot find module 'express'
- **Solution**: Run `npm install` in the backend directory

### Error: EPERM permission denied
- **Solution**: 
  - Try: `sudo npm install` (macOS/Linux)
  - Or: `npm install --legacy-peer-deps`
  - Or: Check npm permissions: `npm config get prefix`

### Error: TypeScript errors
- **Solution**: After installing dependencies, TypeScript should resolve types automatically
- If errors persist, run: `npm run type-check`

### Port already in use
- **Solution**: Change PORT in `.env` file or kill the process using port 3001

## Verification

After installation, verify everything works:
```bash
# Check if dependencies are installed
ls node_modules

# Type check
npm run type-check

# Start server
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:3001
📡 CORS enabled for: http://localhost:8080
```

## Dependencies Required

The backend requires these packages:
- express - Web framework
- cors - CORS middleware
- dotenv - Environment variables
- jsonwebtoken - JWT authentication
- bcryptjs - Password hashing
- zod - Schema validation
- uuid - Unique ID generation
- google-auth-library - Google OAuth

All dependencies are listed in `package.json` and will be installed automatically with `npm install`.

