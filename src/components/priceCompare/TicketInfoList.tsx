import styled from 'styled-components';

import TicketInfo from './TicketInfo';
const TicketInfoList = () => {
  return (
    <TicketInfoListContainer>
      <TicketInfo />
    </TicketInfoListContainer>
  );
};

export default TicketInfoList;

const TicketInfoListContainer = styled.div`
  margin-top: 23.4rem;
  width: 100%;
`;
