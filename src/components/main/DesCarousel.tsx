import DES_ITEM_DATA from '../../data/DesItemData';
import Carousel from '../common/Carousel';
// eslint-disable-next-line import/order
import DesItem, { DesItemProps } from './DesItem';

const DesCarousel = () => {
  return (
    <Carousel dataLength={DES_ITEM_DATA.length}>
      {DES_ITEM_DATA.map((item: DesItemProps, idx: number) => (
        <DesItem key={String(idx) + item.desName} desName={item.desName} desImg={item.desImg} />
      ))}
    </Carousel>
  );
};

export default DesCarousel;
