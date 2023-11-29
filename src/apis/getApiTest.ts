import { client } from './client';

export const getApiTest = () => {
  return client.get(`/air/min-prices`);
};
