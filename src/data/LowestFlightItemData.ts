import {
  AirIndiaImg,
  DanangFlightImg,
  JejuFlightImg,
  JetstarImg,
  MIATImg,
  NewDeliFlightImg,
  ScootImg,
  SingaporeFlightImg,
  SydneyFlightImg,
  TwayImg,
  UBTFlightImg,
  VietJetImg,
} from '../assets/image';

const LOWEST_FLIGHT_ITEM = [
  {
    place: '제주',
    img: JejuFlightImg,
    icon: TwayImg,
    go: 'TAE - CJU',
    back: 'CJU - TAE',
  },
  {
    place: '다낭',
    img: DanangFlightImg,
    icon: VietJetImg,
    go: 'TAE - DAD',
    back: 'DAD - TAE',
  },
  {
    place: '뉴델리',
    img: NewDeliFlightImg,
    icon: AirIndiaImg,
    go: 'ICN - DEL',
    back: 'DEL - ICN',
  },
  {
    place: '울란바토르',
    img: UBTFlightImg,
    icon: MIATImg,
    go: 'PUS - UBN',
    back: 'UBN - PUS',
  },
  {
    place: '시드니',
    img: SydneyFlightImg,
    icon: JetstarImg,
    go: 'ICN - SYD',
    back: 'SYD - ICN',
  },
  {
    place: '싱가포르',
    img: SingaporeFlightImg,
    icon: ScootImg,
    go: 'CJU - SIN',
    back: 'SIN - CJU',
  },
];

export default LOWEST_FLIGHT_ITEM;
