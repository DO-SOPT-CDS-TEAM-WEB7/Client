// eslint-disable-next-line simple-import-sort/imports
import {
  HotelImg1,
  HotelImg2,
  HotelImg3,
  HotelImg4,
  HotelImg5,
  HotelImg6,
  HotelImg7,
  HotelImg8,
} from '../assets/image/index.ts';
import { HotelItemProps } from '../components/ticketList/HotelItem.tsx';

const HOTEL_ITEM_DATA: HotelItemProps[] = [
  {
    hotelImg: HotelImg1,
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
    hotelRate: 4.7,
    hotelReview: '(173)',
    hotelPrice: '75,113원',
  },
  {
    hotelImg: HotelImg2,
    hotelName: '삿포로의 캡슐 호텔',
    hotelRoom: '싱글룸 (공용 욕실)',
    hotelBed: '침대 1개',
    hotelRate: 4.74,
    hotelReview: '(181)',
    hotelPrice: '43,014원',
  },
  {
    hotelImg: HotelImg3,
    hotelName: '삿포로의 다인실',
    hotelRoom: '작은 개인실',
    hotelBed: '이층침대 1개',
    hotelRate: 4.9,
    hotelReview: '(311)',
    hotelPrice: '33,980원',
  },
  {
    hotelImg: HotelImg4,
    hotelName: '삿포로의 아파트',
    hotelRoom: '싱글룸 (안방)',
    hotelBed: '더블침대 1개',
    hotelRate: 3.7,
    hotelReview: '(213)',
    hotelPrice: '78,024원',
  },
  {
    hotelImg: HotelImg5,
    hotelName: '삿포로의 캡슐 호텔',
    hotelRoom: '싱글룸 (공용 욕실)',
    hotelBed: '침대 1개',
    hotelRate: 4.2,
    hotelReview: '(153)',
    hotelPrice: '35,243원',
  },
  {
    hotelImg: HotelImg6,
    hotelName: '삿포로의 호텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
    hotelRate: 4.8,
    hotelReview: '(181)',
    hotelPrice: '107,980원',
  },
  {
    hotelImg: HotelImg7,
    hotelName: '삿포로의 아파트',
    hotelRoom: '싱글룸 (원룸)',
    hotelBed: '침대 1개',
    hotelRate: 4.9,
    hotelReview: '(311)',
    hotelPrice: '83,670원',
  },
  {
    hotelImg: HotelImg8,
    hotelName: '삿포로의 다인실',
    hotelRoom: '작은 개인실',
    hotelBed: '이층침대 1개',
    hotelRate: 3.7,
    hotelReview: '(213)',
    hotelPrice: '41,328원',
  },
];

export default HOTEL_ITEM_DATA;
