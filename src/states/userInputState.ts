import { atom } from 'recoil';

export interface userInputType {
  startDate: string;
  endDate: string;
  ticketId: string;
}

export const userInputState = atom<userInputType>({
  key: 'userInputState',
  default: {
    startDate: '',
    endDate: '',
    ticketId: '',
  },
});
