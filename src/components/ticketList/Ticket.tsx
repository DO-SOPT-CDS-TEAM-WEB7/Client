import React from 'react';
import styled from 'styled-components';

import { ArrowImg, KoreanAirImg } from '../../assets/image';

const Ticket = () => {
  return (
    <TicketContainer>
      <DepartContainer>
        <FlightCompany>
          <FlightLogo src={KoreanAirImg} alt="항공사 로고" />
          <FlightName>대한항공</FlightName>
        </FlightCompany>

        <FlightContainer>
          <Depart>
            <Time>13:15</Time>
            <Place>ICN</Place>
          </Depart>

          <DurationContainer>
            <Path>직항</Path>
            <PathArrow src={ArrowImg} alt="화살표" />
            <DurationTime>02시간 50분</DurationTime>
          </DurationContainer>

          <Arrive>
            <Time>16:05</Time>
            <Place>CTS</Place>
          </Arrive>
        </FlightContainer>
      </DepartContainer>

      <ArrivalContainer>
        <FlightCompany>
          <FlightLogo src={KoreanAirImg} alt="항공사 로고" />
          <FlightName>대한항공</FlightName>
        </FlightCompany>

        <FlightContainer>
          <Depart>
            <Time>13:15</Time>
            <Place>ICN</Place>
          </Depart>

          <DurationContainer>
            <Path>직항</Path>
            <PathArrow src={ArrowImg} alt="화살표" />
            <DurationTime>02시간 50분</DurationTime>
          </DurationContainer>

          <Arrive>
            <Time>16:05</Time>
            <Place>CTS</Place>
          </Arrive>
        </FlightContainer>
      </ArrivalContainer>
    </TicketContainer>
  );
};

export default Ticket;

const TicketContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 0.1rem solid ${({ theme }) => theme.colors.skscanGrey200};
  border-radius: 2.4rem;
  padding: 2.8rem 3.6rem;
  width: 100%;
`;

const DepartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4rem;
`;

const ArrivalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FlightCompany = styled.div`
  display: flex;
  align-items: center;
`;

const FlightLogo = styled.img`
  margin: 0.8rem 2.4rem 0 0;
  width: 4.8rem;
  height: 4.8rem;
`;

const FlightName = styled.span`
  margin-right: 11.2rem;
  ${({ theme }) => theme.fonts.body06};
`;

const FlightContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Depart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: 1.7rem;
`;

const Arrive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1.8rem;
`;
const Time = styled.span`
  ${({ theme }) => theme.fonts.heading08};

  margin-bottom: 0.1rem;
`;
const Place = styled.span`
  margin-left: 2.4rem;

  ${({ theme }) => theme.fonts.body04};

  color: ${({ theme }) => theme.colors.skscanGrey500};
`;

const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Path = styled.span`
  color: ${({ theme }) => theme.colors.skscanSecondary};
  ${({ theme }) => theme.fonts.body06};
`;
const PathArrow = styled.img`
  width: 11.1rem;
  height: 2.2rem;
`;
const DurationTime = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey500};
  ${({ theme }) => theme.fonts.body06};
`;
