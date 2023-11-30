import styled from 'styled-components';

import { ArrowRightGrayIcon } from '../../assets/icon';
// eslint-disable-next-line import/order
import DesCarousel from './DesCarousel';

const RecommendDestination = () => {
  return (
    <RecommendDestinationContainer>
      <DesHeader>
        <Title>가슴 뛰는 여행, 어디로 떠나볼까요?</Title>
        <SeeAll>
          전체보기
          <IconImg src={ArrowRightGrayIcon} alt="ArrowRightGrayIcon" />
        </SeeAll>
      </DesHeader>
      <DesCarousel />
    </RecommendDestinationContainer>
  );
};

export default RecommendDestination;

const RecommendDestinationContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const DesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading04};
`;

const SeeAll = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.skscanGrey800};
  ${({ theme }) => theme.fonts.body04};
`;

const IconImg = styled.img`
  object-fit: contain;
`;
