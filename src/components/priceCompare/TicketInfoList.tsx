import styled from 'styled-components';

import { AirResultDto } from '../../types/ticketReservationInfo';
// eslint-disable-next-line import/order
import TicketInfo from './TicketInfo';

interface TicketInfoListProps {
  airResultData?: AirResultDto;
}

const TicketInfoList = (props: TicketInfoListProps) => {
  const { airResultData } = props;

  return (
    <TicketInfoListContainer>
      <TicketInfo airResultData={airResultData} isStartTicket={true} />
      <TicketInfo airResultData={airResultData} isStartTicket={false} />
    </TicketInfoListContainer>
  );
};

export default TicketInfoList;

const TicketInfoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin-top: 23.4rem;
  width: 100%;
`;
