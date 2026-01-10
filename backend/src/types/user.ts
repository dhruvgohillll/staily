export interface User {
  id: string;
  email: string;
  password?: string; // hashed, optional for OAuth users
  name?: string;
  createdAt: string;
  provider?: 'local' | 'google'; // auth provider
  googleId?: string; // Google user ID
}

export interface UserResponse {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
}

export interface AuthResponse {
  user: UserResponse;
  token: string;
}

