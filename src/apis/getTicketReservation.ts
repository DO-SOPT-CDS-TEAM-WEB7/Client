import { TicketReservationRequest, TicketReservationResponse } from '../types/ticketReservationInfo';
// eslint-disable-next-line import/order
import { client } from './client';

export const getTicketReservation = (queryParams: TicketReservationRequest) => {
  return client.get<TicketReservationResponse>(`/ticket`, { params: queryParams });
};
