import { atom } from 'recoil';

import { PostTicketReservationResponse } from '../types/ticketReservationInfo';

export const siteMovingState = atom<PostTicketReservationResponse>({
  key: 'siteMovingState',
  default: {
    startDateTime: '',
    endDateTime: '',
    companyName: '',
    price: '',
  },
});
