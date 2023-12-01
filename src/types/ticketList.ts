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
