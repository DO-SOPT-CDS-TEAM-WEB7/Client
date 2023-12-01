import { useEffect } from 'react';
import styled from 'styled-components';

import { getTicketReservation } from '../apis/getTicketReservation';
import Banner from '../components/priceCompare/Banner';
import Header from '../components/priceCompare/Header';
import TicketInfoList from '../components/priceCompare/TicketInfoList';
const PriceCompare = () => {
  const getTicketReservationInfo = async () => {
    try {
      const params = {
        startDate: '2023-11-13',
        endDate: '2023-11-15',
        reservationId: 4,
      };

      const {
        data: { data },
      } = await getTicketReservation(params);
      console.log(data);
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
      <TicketInfoList />
    </PriceCompoareContainer>
  );
};

export default PriceCompare;

const PriceCompoareContainer = styled.div`
  position: absolue;
  background-color: ${({ theme }) => theme.colors.skscanGrey50};
  width: 100%;
  height: 100%;
`;
