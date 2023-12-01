import { PostTicketReservationRequest, PostTicketReservationResponse } from '../types/ticketReservationInfo';
// eslint-disable-next-line import/order
import { client } from './client';

interface ResponseType {
  data: PostTicketReservationResponse;
}

export const postTicketReservation = (body: PostTicketReservationRequest) => {
  console.log(body);
  return client.post<ResponseType>(`/air/reservation`, body);
};
