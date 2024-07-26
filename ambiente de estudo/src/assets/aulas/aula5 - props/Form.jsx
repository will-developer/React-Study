import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <form>
      <Input id="email" required />
      <Input id="password" type="password" />
      <Button />
    </form>
  );
};

export default Form;
