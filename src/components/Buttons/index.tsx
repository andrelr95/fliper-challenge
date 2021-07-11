import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'secondary';
  outline?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    // eslint-disable-next-line no-console
    <StyledButton onClick={() => console.log('click')}>{children}</StyledButton>
  );
};

export default Button;
