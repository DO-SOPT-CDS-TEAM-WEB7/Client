import { MinPriceResponse } from '../types/ticketList';
// eslint-disable-next-line import/order
import { client } from './client';

export const getMinPriceList = () => {
  return client.get<MinPriceResponse>(`air/min-prices`);
};
