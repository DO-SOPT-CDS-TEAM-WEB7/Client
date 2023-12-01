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

export interface TicketItemProps {
  reservationId: number;
  airName: string;
  startTime: TimeData;
  endTime: TimeData;
  price: string;
  CO2: number;
  onSelect: () => void;
  isLast: boolean
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
export interface MinPriceListData {
  airId: number;
  airName: string;
  minPriceString: string;
}

export interface airMinPriceDtoList {
  airMinPriceDtoList: MinPriceListData[];
}

export interface MinPriceResponse {
  data: airMinPriceDtoList;
}
