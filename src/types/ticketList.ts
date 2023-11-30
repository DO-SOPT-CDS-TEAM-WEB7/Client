export interface MinPriceListData {
  airId: number;
  airName: string;
  minPriceString: string;
}

export interface MinPriceResponse {
  data: MinPriceListData[];
}
