import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../../services/authenticate';
import { useStarWars } from '../../../starWars/hooks/useStarWars';

export function LogoutPage() {
  const navigate = useNavigate();
  const { cleanState } = useStarWars();
  useEffect(() => {
    cleanState();
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
