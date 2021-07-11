/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultTheme as DefaultStyledTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    fontTypes: { [key in keyof typeof fontTypes]: any };
    shadows: { [key in keyof typeof shadowColors]: string };
  }
}

export const themeColors = {
  white: '#FFF',
  grayBlue: '#9AA3BC',
  grayBlue2: '#E8EBF6',
  darkGray: '#606377',
  darkBlue: '#3B5CB8',
};

export const shadowColors = {
  light: '1px 1px 1px rgba(0, 0, 0, 0.16)',
};

const genericFontType = {
  fontFamily: 'Open Sans',
};

export const fontTypes = {
  heading1: {
    ...genericFontType,
    fontSize: 92,
    letterSpacing: 0,
    lineHeight: '125px',
  },
  heading2: {
    ...genericFontType,
    fontSize: 56,
    letterSpacing: 1,
    lineHeight: '76px',
  },
};

const theme: DefaultStyledTheme = {
  colors: themeColors,
  fontTypes,
  shadows: shadowColors,
};

export default theme;
