import React from 'react';
import { Form } from './form';
import { Input } from '../input/input';
import { Button } from '../button/Button';

export default {

  title: 'Form',
  component: Form,
};
export function FormLogin() {
  return (
    <Form>
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
  );
}
