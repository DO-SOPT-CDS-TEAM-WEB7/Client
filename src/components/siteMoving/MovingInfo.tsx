const MovingInfo = () => {
  return (
    <MovingInfoContainer>
      <Title>예약 사이트로 이동 중 입니다.</Title>
    </MovingInfoContainer>
  );
};

import styled from 'styled-components';

export default MovingInfo;

const MovingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.skscanWt};
  ${({ theme }) => theme.fonts.heading04}
`;
