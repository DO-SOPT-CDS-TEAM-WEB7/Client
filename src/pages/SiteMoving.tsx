import styled from 'styled-components';

import { GotoBgImg } from '../assets/image';
import MovingInfo from '../components/siteMoving/MovingInfo';

const SiteMoving = () => {
  return (
    <>
      <SiteMovingBg src={GotoBgImg} alt="비행기와 하늘" />
      <MovingInfo />
    </>
  );
};

export default SiteMoving;
const SiteMovingBg = styled.img`
  position: fixed;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
