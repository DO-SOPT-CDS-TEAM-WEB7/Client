import {
  AtlantaImg,
  BangkokImg,
  BeijingImg,
  ChicagoImg,
  DanangImg,
  DubaiImg,
  HKImg,
  KyotoImg,
  LAImg,
  MoscowImg,
  NYImg,
  OsakaImg,
  ParisImg,
  PrahaImg,
  RomaImg,
  SeattleImg,
} from '../assets/image/index.ts';
import { FlightItemProps } from '../components/main/FlightItem.tsx';

const FLIGHT_ITEM_DATA: FlightItemProps[] = [
  {
    flightImg: AtlantaImg,
    flightName: '아틀란타',
  },
  {
    flightImg: BeijingImg,
    flightName: '베이징',
  },
  {
    flightImg: HKImg,
    flightName: '홍콩',
  },
  {
    flightImg: RomaImg,
    flightName: '로마',
  },
  {
    flightImg: ChicagoImg,
    flightName: '시카고',
  },
  {
    flightImg: MoscowImg,
    flightName: '모스크바',
  },
  {
    flightImg: OsakaImg,
    flightName: '오사카',
  },
  {
    flightImg: LAImg,
    flightName: 'LA',
  },
  {
    flightImg: SeattleImg,
    flightName: '시애틀',
  },
  {
    flightImg: BangkokImg,
    flightName: '방콕',
  },
  {
    flightImg: ParisImg,
    flightName: '파리',
  },
  {
    flightImg: NYImg,
    flightName: '뉴욕',
  },
  {
    flightImg: DanangImg,
    flightName: '다낭',
  },
  {
    flightImg: DubaiImg,
    flightName: '두바이',
  },
  {
    flightImg: KyotoImg,
    flightName: '교토',
  },
  {
    flightImg: PrahaImg,
    flightName: '프라하',
  },
];

export default FLIGHT_ITEM_DATA;
