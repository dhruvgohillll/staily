# Staily AI Design - Setup Guide

This guide will help you set up both the frontend and backend for the Staily AI Design application.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory:
```env
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
CORS_ORIGIN=http://localhost:8080
```

**Important:** Change the `JWT_SECRET` to a secure random string in production!

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

## Frontend Setup

1. Navigate to the root directory (if not already there):
```bash
cd ..
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Create a `.env` file in the root directory (optional, defaults to `http://localhost:3001/api`):
```env
VITE_API_URL=http://localhost:3001/api
```

4. Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:8080` (or the port configured in `vite.config.ts`)

## Testing the Authentication

1. Make sure both servers are running (backend on port 3001, frontend on port 8080)

2. Open your browser and navigate to `http://localhost:8080`

3. Click the "Sign In" button in the navbar

4. You can either:
   - **Sign In**: Use existing credentials (if you've registered before)
   - **Sign Up**: Create a new account by clicking "Don't have an account? Sign up"

5. After successful login, you'll see your email in the navbar and a "Sign Out" button

## API Endpoints

### Authentication Endpoints

- `POST /api/auth/login` - Login with email and password
- `POST /api/auth/register` - Register a new user
- `GET /api/auth/verify` - Verify JWT token (requires Authorization header)

### Example Login Request:
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

## Project Structure

```
staily-ai-design-main/
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   └── auth.ts          # Authentication routes
│   │   ├── middleware/
│   │   │   └── auth.ts           # Auth middleware
│   │   ├── utils/
│   │   │   ├── auth.ts           # Auth utilities (JWT, bcrypt)
│   │   │   └── database.ts       # Database utilities (JSON file storage)
│   │   ├── types/
│   │   │   └── user.ts           # TypeScript types
│   │   └── server.ts             # Express server setup
│   ├── data/                     # User data storage (auto-created)
│   └── package.json
├── src/
│   ├── components/
│   │   ├── LoginDialog.tsx       # Login/Register dialog
│   │   └── Navbar.tsx            # Navigation bar with auth
│   ├── contexts/
│   │   └── AuthContext.tsx       # Authentication context
│   └── lib/
│       └── api.ts                # API client
└── package.json
```

## Features Implemented

✅ User registration with email and password
✅ User login with email and password
✅ JWT token-based authentication
✅ Password hashing with bcrypt
✅ Protected routes (ready for implementation)
✅ Login dialog/modal UI
✅ Sign In button integration
✅ User state management with React Context
✅ Token persistence in localStorage
✅ Automatic token verification on app load

## Next Steps

- Add protected routes/pages
- Add password reset functionality
- Add email verification
- Migrate from JSON file storage to a proper database (PostgreSQL, MongoDB, etc.)
- Add user profile management
- Add social authentication (Google, GitHub, etc.)

## Troubleshooting

### Backend won't start
- Make sure port 3001 is not already in use
- Check that all dependencies are installed (`npm install` in backend directory)
- Verify the `.env` file exists and has correct values

### Frontend can't connect to backend
- Ensure backend is running on port 3001
- Check CORS_ORIGIN in backend `.env` matches your frontend URL
- Verify VITE_API_URL in frontend `.env` points to `http://localhost:3001/api`

### Authentication not working
- Check browser console for errors
- Verify backend is running and accessible
- Check network tab in browser dev tools for API request/response

