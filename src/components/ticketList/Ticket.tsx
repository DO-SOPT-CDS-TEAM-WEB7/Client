import styled from 'styled-components';

import TicketItem from './TicketItem';

const Ticket = () => {
  return (
    <TicketContainer>
      <TicketItem></TicketItem>
      <TicketItem></TicketItem>
      <TicketItem></TicketItem>
      <TicketItem></TicketItem>
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
