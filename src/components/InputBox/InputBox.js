import React from 'react';
import { Input } from './InputBox.styles';

export const InputBox = ({ placeholder }) => {
  return <Input type="text" placeholder={placeholder} />;
};
