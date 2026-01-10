import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/lib/api';
import { apiClient } from '@/lib/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored token on mount
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      setToken(storedToken);
      // Verify token and get user
      apiClient
        .verifyToken()
        .then(({ user }) => {
          setUser(user);
        })
        .catch(() => {
          // Token invalid, clear it
          localStorage.removeItem('auth_token');
          setToken(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await apiClient.login({ email, password });
    setUser(response.user);
    setToken(response.token);
    localStorage.setItem('auth_token', response.token);
  };

  const register = async (email: string, password: string, name?: string) => {
    const response = await apiClient.register({ email, password, name });
    setUser(response.user);
    setToken(response.token);
    localStorage.setItem('auth_token', response.token);
  };

  const loginWithGoogle = async () => {
    const { authUrl } = await apiClient.getGoogleAuthUrl();
    // Redirect to Google OAuth
    window.location.href = authUrl;
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth_token');
  };

  // Handle OAuth callback on mount
  useEffect(() => {
    const handleOAuthCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      const error = urlParams.get('error');

      if (error) {
        console.error('OAuth error:', error);
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
        return;
      }

      if (token) {
        setToken(token);
        localStorage.setItem('auth_token', token);
        
        // Verify token and get user
        try {
          const { user } = await apiClient.verifyToken();
          setUser(user);
        } catch (error) {
          console.error('Failed to verify OAuth token:', error);
          localStorage.removeItem('auth_token');
          setToken(null);
        }
        
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    if (window.location.pathname === '/auth/callback') {
      handleOAuthCallback();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        loginWithGoogle,
        logout,
        isLoading,
        isAuthenticated: !!user && !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

