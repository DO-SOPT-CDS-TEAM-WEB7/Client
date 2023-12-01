import { atom } from 'recoil';

export interface siteMovingStateType {
  startDateTime: string;
  endDateTime: string;
  companyName: string;
  price: string;
}

export const siteMovingState = atom<siteMovingStateType>({
  key: 'siteMovingState',
  default: {
    startDateTime: '',
    endDateTime: '',
    companyName: '',
    price: '',
  },
});
