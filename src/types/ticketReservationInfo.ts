export interface TicketReservationInfo {
  airId: number;
  airName: string;
  minPriceString: string;
}

export interface ApiTestResponse {
  data: ApiTestData[]; // 꼭 data : ~~ 여야 한다! 왜냐하면 서버에서 들어오는 형식이 data : [~~~]니까!
}
