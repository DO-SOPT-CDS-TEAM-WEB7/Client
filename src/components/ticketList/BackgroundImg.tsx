import styled from 'styled-components';

import { MainImg } from '../../assets/image';

const BackgroundImg = () => {
  return <MainImgContainer src={MainImg} alt="메인이미지" />;
};

export default BackgroundImg;

const MainImgContainer = styled.img`
  position: absolute;
  top: 13rem;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 22.6rem;
`;
