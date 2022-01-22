import React, {
  useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../../common/form/form';
import { Input } from '../../../common/input/input';
import { Button } from '../../../common/button/Button';
import { getUserName } from '../../../../services/authenticate';
import { useAuth } from '../../hooks/useAuth';

const regex = '^[A-Za-z\\d\\s]+$';
export function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(() => {
    if (getUserName()) {
      const timeout = setTimeout(() => {
        navigate('/table');
      });
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reg = new RegExp(regex);
    // @ts-ignore
    const username = e.target.username.value;
    // @ts-ignore
    const password = e.target.password.value;
    if (!reg.test(username) || !reg.test(password)) {
      setError('Error: input are supporting only digits and letters');
      return;
    }
    auth.authenticate({ username, password }).then((isAuthenticated) => {
      if (isAuthenticated) {
        auth.setUsername(username);
        navigate('/table');
      } else {
        setError('Wrong credentials');
      }
    }).catch((err) => {
      // TODO map errors
      setError(err.message);
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          required
        />
        <Input
          type="password"
          name="password"
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      {error}
    </div>
  );
}
