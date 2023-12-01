import { atom } from 'recoil';

export const reservationIdState = atom<number>({
  key: 'reservationIdState',
  default: 0,
});
