import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getTicketList } from '../../apis/getTicketList';
import { ReservationData } from '../../types/ticketList';
// eslint-disable-next-line import/order
import HotelCarousel from './HotelCarousel';
// eslint-disable-next-line import/order
import TicketItem from './TicketItem';

const Ticket = () => {
  const [ticketList, setTicketList] = useState<ReservationData[]>([]);
  const getTickets = async () => {
    try {
      const params = {
        startDate: '2023-11-13',
        endDate: '2023-11-15',
      };

      const {
        data: { data },
      } = await getTicketList(params);
      setTicketList(data.reservationListDto);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  // if (ticketList.length === 0) {
  //   return <p>로딩중</p>;
  // }

  return (
    <>
      <TicketContainer>
        {ticketList.slice(0, 4).map((item) => (
          <TicketItem
            key={item.reservationId}
            reservationId={item.reservationId}
            airName={item.airName}
            startTime={item.startTime}
            endTime={item.endTime}
            price={item.price}
            CO2={item.CO2}
          />
        ))}
      </TicketContainer>
      <HotelCarousel />
      <TicketContainer>
        {ticketList.slice(4).map((item) => (
          <TicketItem
            key={item.reservationId}
            reservationId={item.reservationId}
            airName={item.airName}
            startTime={item.startTime}
            endTime={item.endTime}
            price={item.price}
            CO2={item.CO2}
          />
        ))}
      </TicketContainer>
    </>
  );
};

export default Ticket;

const TicketContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
`;
