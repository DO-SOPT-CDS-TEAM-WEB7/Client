import styled from 'styled-components';

import HOTEL_ITEM_DATA from '../../data/HotelItemData.ts';
import Carousel from '../common/Carousel.tsx';
// eslint-disable-next-line import/order
import HotelItem, { HotelItemProps } from './HotelItem.tsx';

const HotelCarousel = () => {
  return (
    <HotelCarouselContainer>
      <Carousel dataLength={HOTEL_ITEM_DATA.length}>
        {HOTEL_ITEM_DATA.map((item: HotelItemProps, idx: number) => (
          <HotelItem
            key={String(idx) + item.hotelName}
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
    </HotelCarouselContainer>
  );
};

export default HotelCarousel;

const HotelCarouselContainer = styled.div`
  margin: 4rem 0;
`;
