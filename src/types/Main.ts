export interface MainApiData {
  cityName: string;
  country: string;
  startDate: Date;
  endDate: Date;
  companyAir: string;
  minPriceString: string;
}

export interface MainApiObj {
  cards: MainApiData[];
}

export interface MainApiResponse {
  data: MainApiObj;
}
