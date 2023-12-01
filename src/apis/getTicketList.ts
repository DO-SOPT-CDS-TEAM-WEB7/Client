import { TicketListRequestBody, TicketListResponse } from '../types/ticketList';
// eslint-disable-next-line import/order
import { client } from './client';

export const getTicketList = (queryParams: TicketListRequestBody) => {
  return client.get<TicketListResponse>(`air/reservations`, { params: queryParams });
};
