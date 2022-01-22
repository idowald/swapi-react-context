import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth || !auth.username) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
