#!/bin/bash

# Backend Installation Script
echo "🚀 Installing backend dependencies..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing npm packages..."
    npm install
else
    echo "✅ node_modules already exists"
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "📝 Creating .env file from example..."
    cp .env.example .env 2>/dev/null || echo "PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
CORS_ORIGIN=http://localhost:8080
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=http://localhost:8080/auth/google/callback" > .env
    echo "⚠️  Please update .env with your actual values!"
else
    echo "✅ .env file already exists"
fi

echo "✅ Backend setup complete!"
echo "📖 Run 'npm run dev' to start the development server"

