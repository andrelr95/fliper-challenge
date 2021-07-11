import styled from 'styled-components';
import { TextProps } from './types';

export const StyledText = styled.span<TextProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  text-align: ${({ textAlign }) => textAlign};

  ${({ theme, type }) => theme.fontTypes[type]}
`;
