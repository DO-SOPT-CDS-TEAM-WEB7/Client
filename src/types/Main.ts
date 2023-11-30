export interface MainApiData {
  cityName: string;
  country: string;
  startDate: Date;
  endDate: Date;
  companyAir: string;
  minPriceString: string;
}

export interface MainApiResponse {
  data: MainApiData[];
}
