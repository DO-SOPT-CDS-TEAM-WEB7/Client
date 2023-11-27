import styled from 'styled-components';

import { ArrowRightGrayIcon } from '../../assets/icon';
// eslint-disable-next-line import/order
import FlightCarousel from './FlightCarousel';

const RecommendFlight = () => {
  return (
    <RecommendFlightContainer>
      <FlightHeader>
        <Title>스카이스캐너가 제대로 준비한 항공편을 확인해보세요</Title>
        <SeeAll>
          전체보기
          <IconImg src={ArrowRightGrayIcon} alt="ArrowRightGrayIcon" />
        </SeeAll>
      </FlightHeader>
      <FlightCarousel />
    </RecommendFlightContainer>
  );
};

export default RecommendFlight;

const RecommendFlightContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const FlightHeader = styled.div`
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
