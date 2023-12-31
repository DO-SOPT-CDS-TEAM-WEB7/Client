import styled from 'styled-components';

import { AdImg } from '../../assets/image';

const AdvImg = () => {
  return <AdImgContainer src={AdImg} alt="광고 이미지" />;
};

export default AdvImg;

const AdImgContainer = styled.img`
  margin-top: 3.6rem;
  margin-bottom: 4.8rem;
  width: 100%;
  height: 9.2rem;
`;
