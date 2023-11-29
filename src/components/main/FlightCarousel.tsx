import FLIGHT_ITEM_DATA from '../../data/FlightItemData';
import Carousel from '../common/Carousel';
// eslint-disable-next-line import/order
import FlightItem, { FlightItemProps } from './FlightItem';

const FlightCarousel = () => {
  return (
    <Carousel dataLength={FLIGHT_ITEM_DATA.length}>
      {FLIGHT_ITEM_DATA.map((item: FlightItemProps, idx: number) => (
        <FlightItem key={String(idx) + item.flightName} flightName={item.flightName} flightImg={item.flightImg} />
      ))}
    </Carousel>
  );
};

export default FlightCarousel;
