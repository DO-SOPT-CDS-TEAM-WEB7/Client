import { DefaultTheme } from 'styled-components';

const colors = {
  skscan_primary: '#05203C',
  skscan_secondary: '#0062e3',
  skscan_bk: '#161616',
  skscan_wt: '#FFFFFF',
  skscan_red: '#FF5B5B',
  skscan_orange: '#F55D42',
  skscan_green: '#3FAD5E',
  skscan_yellow: '#EFDC31',

  skscan_grey50: '#F9F9F9',
  skscan_grey100: '#EEF1F2',
  skscan_grey150: '#E6E7EB',
  skscan_grey200: '#D5D7E0',
  skscan_grey300: '#B9BCC8',
  skscan_grey400: '#9699A6',
  skscan_grey500: '#7E8087',
  skscan_grey600: '#636469',
  skscan_grey700: '#555859',
  skscan_grey800: '#48494A',
  skscan_grey900: '#383939',
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
