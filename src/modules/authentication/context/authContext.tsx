import {
  createContext, useEffect, useMemo, useRef, useState,
} from 'react';
import { Authenticate, authenticate, getUserName } from '../../../services/authenticate';

interface AuthContextType {
    username: string| null ;
    // eslint-disable-next-line
    setUsername: (username:string)=>void;
    // eslint-disable-next-line
    authenticate : (props : Authenticate)=>Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [username, setUsername] = useState<string|null>(getUserName());
  const abortController = useRef<AbortController>();
  const authenticateMiddleWare = (props: Authenticate) => {
    abortController.current = new AbortController();
    return authenticate(props, abortController.current.signal);
  };
  const value = useMemo(() => ({
    username, setUsername, authenticate: authenticateMiddleWare,
  }), [username]);
  useEffect(() => () => {
    abortController.current?.abort();
  }, [abortController.current?.signal]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
