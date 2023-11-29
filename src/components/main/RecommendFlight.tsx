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
      <BtnWrapper>
        <TypeBtn className="selected">인기 도시</TypeBtn>
        <TypeBtn className="not-selected">인기 국가</TypeBtn>
        <TypeBtn className="not-selected">인기 항공편</TypeBtn>
        <TypeBtn className="not-selected">주요 항공사</TypeBtn>
      </BtnWrapper>
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

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TypeBtn = styled.span`
  border-radius: 2rem;
  padding: 0.8rem 1.5rem;
  width: max-content;
  ${({ theme }) => theme.fonts.body04};

  &.selected {
    background-color: ${({ theme }) => theme.colors.skscanSecondary};
    color: ${({ theme }) => theme.colors.skscanWt};
  }

  &.not-selected {
    background-color: ${({ theme }) => theme.colors.skscanGrey100};
    color: ${({ theme }) => theme.colors.skscanGrey900};
  }
`;
