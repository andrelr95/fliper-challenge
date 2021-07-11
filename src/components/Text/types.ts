import { fontTypes, themeColors } from 'styles/theme';

export interface TextProps {
  color: keyof typeof themeColors;
  type: keyof typeof fontTypes;
  textAlign?: 'left' | 'center' | 'right' | 'unset';
}
