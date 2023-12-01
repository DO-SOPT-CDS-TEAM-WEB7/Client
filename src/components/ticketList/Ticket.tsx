import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { getTicketList } from '../../apis/getTicketList';
import { ReservationData } from '../../types/ticketList';
// eslint-disable-next-line import/order
import TicketItem from './TicketItem';

interface TicketProps {
  rangeStart: number;
  rangeEnd?: number;
  selectedAirName: string[];
}

const Ticket = (props: TicketProps) => {
  const navigate = useNavigate();
  const [ticketList, setTicketList] = useState<ReservationData[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
  const { rangeStart, rangeEnd, selectedAirName } = props;


  // 서버에서 티켓리스트 GET
  // 날짜 동적 변경 필요
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

  // 선택된 티켓 저장
  const handleTicketSelect = (reservationId: number) => {
    setSelectedTicket(reservationId);
    navigate('/priceCompare');
  };

  return (
    <TicketContainer>
      {ticketList.slice(rangeStart, rangeEnd).map((item) => (
        <TicketItem
          key={item.reservationId}
          reservationId={item.reservationId}
          airName={item.airName}
          startTime={item.startTime}
          endTime={item.endTime}
          price={item.price}
          CO2={item.CO2}
          onSelect={() => handleTicketSelect(item.reservationId)}
        />
      ))}
    </TicketContainer>
  );
};

export default Ticket;

const TicketContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
`;
