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
    startTime: string;
    endTime: string;
    during: string;
  };
  endTime: {
    startTime: string;
    endTime: string;
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
