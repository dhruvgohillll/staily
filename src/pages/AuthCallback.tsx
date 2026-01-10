import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // Wait a bit for the auth context to process the callback
    const timer = setTimeout(() => {
      if (!isLoading) {
        if (isAuthenticated) {
          navigate("/");
        } else {
          // If authentication failed, redirect to home
          navigate("/");
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        </div>
        <p className="text-muted-foreground">Completing authentication...</p>
      </div>
    </div>
  );
};

export default AuthCallback;

