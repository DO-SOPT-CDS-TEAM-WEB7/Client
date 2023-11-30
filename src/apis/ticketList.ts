import { TicketListResponse } from '../types/ticketList';
// eslint-disable-next-line import/order
import { client } from './client';

export const getTicketList = () => {
  return client.get<TicketListResponse>(`air/reservations`);
};
