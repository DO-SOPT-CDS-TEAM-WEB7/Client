import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { reservationIdState } from '../../states/reservationId';
import { ReservationData } from '../../types/ticketList';
// eslint-disable-next-line import/order
import TicketItem from './TicketItem';

interface TicketProps {
  rangeStart: number;
  rangeEnd?: number;
  ticketList: ReservationData[] | null;
  totalLength: number;
}

const Ticket = (props: TicketProps) => {
  const navigate = useNavigate();

  const setReservationId = useSetRecoilState(reservationIdState);
  const { rangeStart, rangeEnd, ticketList, totalLength } = props;

  // 선택된 티켓 저장
  const handleTicketSelect = (reservationId: number) => {
    setReservationId(reservationId);
    navigate('/priceCompare');
  };

  return (
    <TicketContainer>
      {ticketList ? (
        ticketList
          .slice(rangeStart, rangeEnd)
          .map((item, idx) => (
            <TicketItem
              key={item.reservationId}
              reservationId={item.reservationId}
              airName={item.airName}
              startTime={item.startTime}
              endTime={item.endTime}
              price={item.price}
              CO2={item.CO2}
              onSelect={() => handleTicketSelect(item.reservationId)}
              isLast={rangeStart >= 4 ? (idx + 4 === totalLength ? true : false) : false}
            />
          ))
      ) : (
        <></>
      )}
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
