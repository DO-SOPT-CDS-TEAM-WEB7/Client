import { MainApiResponse } from '../types/Main';
// eslint-disable-next-line import/order
import { client } from './client';

export const getMainFlights = () => {
  return client.get<MainApiResponse>(`/air/min-prices`);
};
