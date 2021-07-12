import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | 'secondary';
  outline?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton onClick={rest.onClick}>{children}</StyledButton>;
};

export default Button;
