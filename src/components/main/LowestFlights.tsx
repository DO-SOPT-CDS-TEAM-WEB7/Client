import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getMainFlights } from '../../apis/getMainFlights';
import { ArrowRightGrayIcon } from '../../assets/icon';
import { MainApiData } from '../../types/Main';
// eslint-disable-next-line import/order
import LowestFlightItem from './LowestFlightItem';

const LowestFlights = () => {
  const [flightInfo, setFlightInfo] = useState<MainApiData[]>([]);

  const getMainFlightsList = async () => {
    try {
      const {
        data: { data },
      } = await getMainFlights();

      setFlightInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMainFlightsList();
  }, []);

  return (
    <FlightsContainer>
      <FlightsHeader>
        <Title>최저가 항공을 서둘러 예약해보세요!</Title>
        <SeeAll>
          전체보기
          <IconImg src={ArrowRightGrayIcon} alt="ArrowRightGrayIcon" />
        </SeeAll>
      </FlightsHeader>
      <FlightListContainer>
        {flightInfo.map((item: MainApiData, idx: number) => (
          <LowestFlightItem key={String(idx) + item.cityName} {...item} />
        ))}
      </FlightListContainer>
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
