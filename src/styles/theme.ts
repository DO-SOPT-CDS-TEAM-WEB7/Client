import { DefaultTheme } from 'styled-components';

const colors = {
  skscanPrimary: '#05203C',
  skscanSecondary: '#0062e3',
  skscanBk: '#161616',
  skscanWt: '#FFFFFF',
  skscanRed: '#FF5B5B',
  skscanOrange: '#F55D42',
  skscanGreen: '#3FAD5E',
  skscanYellow: '#EFDC31',

  skscanGrey50: '#F9F9F9',
  skscanGrey100: '#EEF1F2',
  skscanGrey150: '#E6E7EB',
  skscanGrey200: '#D5D7E0',
  skscanGrey300: '#B9BCC8',
  skscanGrey400: '#9699A6',
  skscanGrey500: '#7E8087',
  skscanGrey600: '#636469',
  skscanGrey700: '#555859',
  skscanGrey800: '#48494A',
  skscanGrey900: '#383939',
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
  heading01: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 4.8,
  }),
  heading02: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 3.6,
  }),
  heading03: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 3.2,
  }),
  heading04: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 3.0,
  }),
  heading05: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 2.8,
  }),
  heading06: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 2.4,
  }),
  heading07: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 2.4,
  }),
  heading08: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 2.2,
  }),
  heading09: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 2.1,
  }),
  heading10: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 2.0,
  }),
  heading11: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 2.0,
  }),
  heading12: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 1.8,
  }),
  heading13: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 1.8,
  }),
  heading14: FONT({
    family: 'Pretendard Variable',
    weight: 700,
    size: 1.6,
  }),

  body01: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 2.0,
  }),
  body02: FONT({
    family: 'Pretendard Variable',
    weight: 400,
    size: 2.0,
  }),
  body03: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 1.8,
  }),
  body04: FONT({
    family: 'Pretendard Variable',
    weight: 400,
    size: 1.8,
  }),
  body05: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 1.6,
  }),
  body06: FONT({
    family: 'Pretendard Variable',
    weight: 400,
    size: 1.6,
  }),

  caption01: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 1.4,
  }),
  caption02: FONT({
    family: 'Pretendard Variable',
    weight: 400,
    size: 1.4,
  }),
  caption03: FONT({
    family: 'Pretendard Variable',
    weight: 600,
    size: 1.2,
  }),
  caption04: FONT({
    family: 'Pretendard Variable',
    weight: 500,
    size: 1.2,
  }),
  caption05: FONT({
    family: 'Pretendard Variable',
    weight: 400,
    size: 1.0,
  }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
