export interface TicketReservationInfo {
  airResultDto: AirResultDto;
  ticketListDto: TicketListDto[];
}

export interface TicketListDto {
  ticketId: number;
  companyName: string;
  stars: number;
  card: string;
  price: string;
  comment: number;
}

export interface AirResultDto {
  dateDto: {
    startDate: string;
    endDate: string;
  };
  reservationId: number;
  airName: string;
  startTime: {
    start: string;
    end: string;
    during: string;
  };
  endTime: {
    start: string;
    end: string;
    during: string;
  };
}

export interface TicketReservationResponse {
  data: TicketReservationInfo;
}

export interface TicketReservationRequest {
  startDate: string;
  endDate: string;
  reservationId: number;
}
export interface PostTicketReservationRequest {
  startDate: string;
  endDate: string;
  ticketId: number;
}

export interface PostTicketReservationResponse {
  startDateTime: string;
  endDateTime: string;
  companyName: string;
  price: string;
}
