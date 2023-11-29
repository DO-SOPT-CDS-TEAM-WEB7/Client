import { ApiTestResponse } from '../types/apiTest';
// eslint-disable-next-line import/order
import { client } from './client';

export const getApiTest = () => {
  return client.get<ApiTestResponse>(`/air/min-prices`);
};
