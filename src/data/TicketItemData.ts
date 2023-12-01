import {
  AirBusanImg,
  AirSeoulImg,
  AnaImg,
  AsianaImg,
  JejuAirImg,
  JinAirImg,
  KoreanAirImg,
  PeachImg,
} from '../assets/image';

export interface TicketImg {
  airName: string;
  airImg: string;
}

const TICKET_AIR_IMG: TicketImg[] = [
  {
    airName: '아시아나항공',
    airImg: AsianaImg,
  },
  {
    airName: '대한항공',
    airImg: KoreanAirImg,
  },
  {
    airName: '제주항공',
    airImg: JejuAirImg,
  },
  {
    airName: '에어부산',
    airImg: AirBusanImg,
  },
  {
    airName: 'Peach',
    airImg: PeachImg,
  },
  {
    airName: 'ANA (전일본공수)',
    airImg: AnaImg,
  },
  {
    airName: '에어서울',
    airImg: AirSeoulImg,
  },
  {
    airName: '진에어',
    airImg: JinAirImg,
  },
];

export default TICKET_AIR_IMG;
