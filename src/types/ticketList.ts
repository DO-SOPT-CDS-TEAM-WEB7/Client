export interface DateDtoData {
  startDate: string;
  endDate: string;
}

export interface TimeData {
  start: string;
  end: string;
  during: string;
}

export interface ReservationData {
  reservationId: number;
  airName: string;
  startTime: TimeData;
  endTime: TimeData;
  price: string;
  CO2: number;
}

export interface TicketListRequestBody {
  startDate: string;
  endDate: string;
}

export interface TicketListData {
  dateDto: DateDtoData;
  reservationListDto: ReservationData[];
}


export interface TicketListResponse {
  data: TicketListData;
}
