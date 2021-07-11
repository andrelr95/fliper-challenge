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

export const fontTypes = {
  medium16: {
    fontFamily: 'Milliard Medium',
    fontSize: '16px',
    letterSpacing: '0.48px',
    lineHeight: '20px',
  },
  bold16: {
    fontFamily: 'Metropolis Bold',
    fontSize: '16px',
    letterSpacing: '0.48px',
    lineHeight: '20px',
  },
  xbold18: {
    fontFamily: 'Metropolis Extra Bold',
    fontSize: '18px',
    letterSpacing: '0.54px',
    lineHeight: '22px',
  },
  xbold22: {
    fontFamily: 'Metropolis Extra Bold',
    fontSize: '22px',
    letterSpacing: '0.66px',
    lineHeight: '30px',
  },
  xbold25: {
    fontFamily: 'Metropolis Extra Bold',
    fontSize: '25px',
    letterSpacing: '0.75px',
    lineHeight: '30px',
  },
};

const theme: DefaultStyledTheme = {
  colors: themeColors,
  fontTypes,
  shadows: shadowColors,
};

export default theme;
