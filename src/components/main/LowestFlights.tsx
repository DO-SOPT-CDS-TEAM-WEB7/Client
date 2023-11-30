import { useEffect } from 'react';
import styled from 'styled-components';

import { getMainFlights } from '../../apis/getMainFlights';
import { ArrowRightGrayIcon } from '../../assets/icon';

const LowestFlights = () => {
  const getMainFlightsList = async () => {
    try {
      const {
        data: { data },
      } = await getMainFlights();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMainFlightsList();
  }, []);

  return (
    <FlightsContainer>
      <FlightsHeader>
        <Title>자주 묻는 질문을 확인해보세요</Title>
        <SeeAll>
          전체보기
          <IconImg src={ArrowRightGrayIcon} alt="ArrowRightGrayIcon" />
        </SeeAll>
      </FlightsHeader>
      <FlightListContainer></FlightListContainer>
    </FlightsContainer>
  );
};

export default LowestFlights;

const FlightsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

const FlightsHeader = styled.div`
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

const FlightListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IconImg = styled.img`
  object-fit: contain;
`;
