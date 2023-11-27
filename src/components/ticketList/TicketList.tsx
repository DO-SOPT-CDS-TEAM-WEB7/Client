import React from 'react';
import styled from 'styled-components';

import Ticket from './Ticket';

const TicketList = () => {
  return <TicketListContainer>
    <Ticket></Ticket>
    <Ticket></Ticket>
    <Ticket></Ticket>
    <Ticket></Ticket>
  </TicketListContainer>
};

export default TicketList;

const TicketListContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
`;
