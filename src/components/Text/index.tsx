import React from 'react';

import { TextProps } from './types';
import { StyledText } from './styles';

const Text: React.FC<TextProps> = ({
  children,
  type = 'medium16',
  color = 'darkGray',
  textAlign = 'unset',
  ...rest
}) => {
  return (
    <StyledText color={color} type={type} textAlign={textAlign} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
