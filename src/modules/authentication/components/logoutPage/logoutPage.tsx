import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../../services/authenticate';

export function LogoutPage() {
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div>
      Logging out
    </div>
  );
}
