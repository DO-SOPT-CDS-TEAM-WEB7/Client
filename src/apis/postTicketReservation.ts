import { PostTicketReservationRequest, TicketReservationResponse } from '../types/ticketReservationInfo';
// eslint-disable-next-line import/order
import { client } from './client';

export const postTicketReservation = (body: PostTicketReservationRequest) => {
  console.log(body);
  return client.post<TicketReservationResponse>(`/air/reservation`, body);
};
