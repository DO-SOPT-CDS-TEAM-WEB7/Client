import React from 'react';
import styled from 'styled-components';

import { CheckboxImg } from '../../assets/image';

const TicketListNav = () => {
  return (
    <HeaderContainer>
      <FlightWayContainer>
        <RoundOnewayContainer>
          <WayBtn clicked={true}>왕복</WayBtn>
          <WayBtn clicked={false}>편도</WayBtn>
          <WayBtn clicked={false}>다구간</WayBtn>
        </RoundOnewayContainer>
        <DirectFlightContainer>
          <Checkbox src={CheckboxImg} alt="체크박스" />
          <DirectFlight>직항 항공편</DirectFlight>
        </DirectFlightContainer>
      </FlightWayContainer>
    </HeaderContainer>
  );
};

export default TicketListNav;

const HeaderContainer = styled.nav`
  display: flex;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2.5rem 0 #0000001a;
  padding: 0 2rem;
  width: 100%;
`;

const FlightWayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RoundOnewayContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin: 1.75rem 0;
  margin-right: 66.8rem;
`;

const WayBtn = styled.div<{ clicked: boolean }>`
  border-radius: 2rem;
  background-color: ${({ clicked, theme }) => (clicked ? theme.colors.skscanSecondary : theme.colors.skscanGrey100)};
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  color: ${({ clicked, theme }) => (clicked ? theme.colors.skscanWt : theme.colors.skscanGrey800)};
  ${({ clicked, theme }) => (clicked ? theme.fonts.heading12 : theme.fonts.body04)};
`;

const DirectFlightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2.4rem 0;
`;

const Checkbox = styled.img`
  margin-right: 1rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const DirectFlight = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey800};
  ${({ theme }) => theme.fonts.body04};
`;
