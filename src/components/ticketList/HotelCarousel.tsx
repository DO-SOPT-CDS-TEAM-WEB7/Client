// eslint-disable-next-line simple-import-sort/imports
import HotelItem, { HotelItemProps } from './HotelItem.tsx';
import HOTEL_ITEM_DATA from '../../data/HotelItemData.ts';
import Carousel from '../common/Carousel.tsx';

const HotelCarousel = () => {
  return (
    <Carousel dataLength={HOTEL_ITEM_DATA.length}>
      {HOTEL_ITEM_DATA.map((item: HotelItemProps, idx: number) => (
        <HotelItem
          key={idx}
          hotelImg={item.hotelImg}
          hotelName={item.hotelName}
          hotelRoom={item.hotelRoom}
          hotelBed={item.hotelBed}
          hotelRate={item.hotelRate}
          hotelReview={item.hotelReview}
          hotelPrice={item.hotelPrice}
        />
      ))}
    </Carousel>
  );
};

export default HotelCarousel;
