import { Stars1, Stars2, Stars3, Stars4, Stars5 } from '../assets/icon';

type StarImgType = {
  // eslint-disable-next-line no-unused-vars
  [key in number]: string;
};

const STARS_IMG: StarImgType = {
  1: Stars1,
  2: Stars2,
  3: Stars3,
  4: Stars4,
  5: Stars5,
};

export default STARS_IMG;
