import { DefaultTheme } from 'styled-components';

const colors = {
  skscan_primary: '#05203C',
};

export type ColorsTypes = typeof colors;

interface Font {
  family: string;
  weight: number;
  size: number;
}

const FONT = ({ family, weight, size }: Font): string => {
  return `
    font-family:${family};
    font-weight:${weight};
    font-size:${size}rem;
    `;
};

const fonts = {
  test: FONT({ family: 'test', weight: 500, size: 1.6 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
