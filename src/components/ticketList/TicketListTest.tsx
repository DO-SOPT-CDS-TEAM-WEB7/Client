// eslint-disable-next-line simple-import-sort/imports
import TicketListCarousel from './TicketListCarousel';
import Carousel from '../common/Carousel';

const DUMMY = [
  {
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
  },
  {
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
  },
  {
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
  },
  {
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
  },
  {
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
  },
  {
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
  },
  {
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
  },
  {
    hotelName: '삿포로의 호스텔',
    hotelRoom: '더블룸 (전용 욕실)',
    hotelBed: '침대 1개',
  },
];

const TicketListTest = () => {
  return (
    <Carousel dataLength={DUMMY.length}>
      {DUMMY.map((item, idx) => (
        <TicketListCarousel key={idx} hotelName={item.hotelName} hotelRoom={item.hotelRoom} hotelBed={item.hotelBed} />
      ))}
    </Carousel>
  );
};

export default TicketListTest;
