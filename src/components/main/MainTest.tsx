import styled from 'styled-components';

import { MainImg } from '../../assets/image';

const MainTest = () => {
  return (
    <MainTestWrapper>
      <StyledImg src={MainImg} alt="메인이미지" />
      <Title>심은서, 고가형, 윤서진 레츠고</Title>
    </MainTestWrapper>
  );
};

export default MainTest;

const MainTestWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.skscanPrimary};
  height: 100vh;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 40rem;
`;

const Title = styled.h1`
  display: flex;
  position: absolute;
  top: 15rem;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.skscanPrimary};
  font-size: 10rem;
`;
