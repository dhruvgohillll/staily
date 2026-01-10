# Staily Backend API

Backend server for Staily AI Design application with authentication.

## Features

- User authentication (Login/Register)
- JWT token-based authentication
- Password hashing with bcrypt
- RESTful API endpoints
- CORS enabled for frontend integration

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create a `.env` file in the `backend` directory:
```env
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
CORS_ORIGIN=http://localhost:8080
```

3. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

## API Endpoints

### Authentication

#### POST `/api/auth/login`
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
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

#### POST `/api/auth/register`
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name" // optional
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

#### GET `/api/auth/verify`
Verify a JWT token and get user information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Health Check

#### GET `/health`
Check if the server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Data Storage

Currently, user data is stored in a JSON file at `backend/data/users.json`. This is suitable for development. For production, consider migrating to a proper database (PostgreSQL, MongoDB, etc.).

## Security Notes

- Passwords are hashed using bcrypt
- JWT tokens expire after 7 days
- Make sure to change the `JWT_SECRET` in production
- The `.env` file should never be committed to version control

