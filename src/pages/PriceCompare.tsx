import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { getTicketReservation } from '../apis/getTicketReservation';
import AirLineTicketList from '../components/priceCompare/AgencyTicketList';
import Banner from '../components/priceCompare/Banner';
import Header from '../components/priceCompare/Header';
import TicketInfoList from '../components/priceCompare/TicketInfoList';
import { reservationIdState } from '../states/reservationIdState';
import { AirResultDto, TicketListDto } from '../types/ticketReservationInfo';
const PriceCompare = () => {
  const [airResultData, setAirResultData] = useState<AirResultDto>();
  const [ticketListData, setTicketListData] = useState<TicketListDto[]>();

  const reservationId = useRecoilValue(reservationIdState);

  const getTicketReservationInfo = async () => {
    try {
      const params = {
        startDate: '2023-11-13',
        endDate: '2023-11-15',
        reservationId: reservationId,
      };

      const {
        data: { data },
      } = await getTicketReservation(params);
      setAirResultData(data.airResultDto);
      setTicketListData(data.ticketListDto);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTicketReservationInfo();
  }, []);

  return (
    <PriceCompoareContainer>
      <Header />
      <Banner />
      <TicketInfoList airResultData={airResultData} />
      <AirLineTicketList ticketListData={ticketListData} />
    </PriceCompoareContainer>
  );
};

export default PriceCompare;

const PriceCompoareContainer = styled.div`
  position: absolue;
  margin-bottom: 7.3rem;
  background-color: ${({ theme }) => theme.colors.skscanGrey50};
  width: 100%;
  height: 100%;
`;
