const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name?: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = localStorage.getItem('auth_token');
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'An error occurred' }));
      throw new Error(error.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async login(credentials: LoginRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(data: RegisterRequest): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async verifyToken(): Promise<{ user: User }> {
    return this.request<{ user: User }>('/auth/verify');
  }

  async getGoogleAuthUrl(): Promise<{ authUrl: string }> {
    return this.request<{ authUrl: string }>('/auth/google/initiate');
  }

  async verifyGoogleToken(idToken: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/google/verify-token', {
      method: 'POST',
      body: JSON.stringify({ idToken }),
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);

