import { DefaultTheme } from 'styled-components';

const colors = {
  skscanPrimary: '#05203C',
  skscanPrimary2: '#003B88',
  skscanSecondary: '#0062E3',
  skscanSecondary2: '#D3E6FF',
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
  skscanGrey300: '#BFC2CE',
  skscanGrey400: '#9DA1AD',
  skscanGrey500: '#878c9B',
  skscanGrey600: '#727682',
  skscanGrey700: '#5C5F6A',
  skscanGrey800: '#454851',
  skscanGrey900: '#2A2B30',
};

export type ColorsTypes = typeof colors;

interface Font {
  family: string;
  weight: number;
  size: number;
  height: string;
}

const FONT = ({ family, weight, size, height }: Font): string => {
  return `
    font-family:${family};
    font-weight:${weight};
    font-size:${size}rem;
    line-height: ${height}; 
    `;
};

const effects = {
  boxDrop: `
  box-shadow: 0 0.4rem 2.5rem 0 rgba(0, 0, 0, 0.10);
  `,
  boxDrop2: `
  box-shadow: 0 0.8rem 2.5rem 0 rgba(0, 0, 0, 0.10);
  `,
  boxDrop3: `
  box-shadow: 0 0.4rem 1.5rem 0 rgba(0, 0, 0, 0.10);
  `,
};

export type EffectsTypes = typeof effects;

const fonts = {
  heading01: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 4.8,
    height: 'normal',
  }),
  heading02: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 3.6,
    height: 'normal',
  }),
  heading03: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 3.2,
    height: 'normal',
  }),
  heading04: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 3.0,
    height: 'normal',
  }),
  heading05: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 2.8,
    height: 'normal',
  }),
  heading06: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 2.4,
    height: 'normal',
  }),
  heading07: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 2.4,
    height: 'normal',
  }),
  heading08: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 2.2,
    height: 'normal',
  }),
  heading09: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 2.1,
    height: 'normal',
  }),
  heading10: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 2.0,
    height: 'normal',
  }),
  heading11: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 2.0,
    height: 'normal',
  }),
  heading12: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 1.8,
    height: 'normal',
  }),
  heading13: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 1.8,
    height: 'normal',
  }),
  heading14: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 1.6,
    height: 'normal',
  }),

  body01: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 2.0,
    height: 'normal',
  }),
  body02: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 2.0,
    height: 'normal',
  }),
  body03: FONT({
    family: 'Pretendard',
    weight: 500,
    size: 1.8,
    height: 'normal',
  }),
  body04: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 1.8,
    height: 'normal',
  }),
  body05: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 1.6,
    height: 'normal',
  }),
  body06: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 1.6,
    height: 'normal',
  }),

  caption01: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 1.4,
    height: 'normal',
  }),
  caption02: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 1.4,
    height: 'normal',
  }),
  caption03: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 1.2,
    height: 'normal',
  }),
  caption04: FONT({
    family: 'Pretendard',
    weight: 500,
    size: 1.2,
    height: 'normal',
  }),
  caption05: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 1.2,
    height: 'normal',
  }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
  effects,
};
