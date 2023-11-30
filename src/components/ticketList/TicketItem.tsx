import styled from 'styled-components';

import { ArrowImg, HeartBlackImg, LeafImg } from '../../assets/image';
import TICKET_AIR_IMG from '../../data/TicketItemData';
import { ReservationData } from '../../types/ticketList';

const TicketItem = (props: ReservationData) => {
  const { reservationId, airName, startTime, endTime, price, CO2 } = props;
  const flight = TICKET_AIR_IMG.filter((item) => item.airName === airName);
  const flightImg = flight[0].airImg;

  return (
    <TicketContainer key={reservationId}>
      <DepartContainer>
        <FlightCompany>
          <FlightLogo src={flightImg} alt="항공사 로고" />
          <FlightName>{airName}</FlightName>
        </FlightCompany>

        <FlightContainer>
          <Depart>
            <Time>{startTime.start}</Time>
            <Place>ICN</Place>
          </Depart>

          <DurationContainer>
            <Path>직항</Path>
            <PathArrow src={ArrowImg} alt="화살표" />
            <DurationTime>{startTime.during}</DurationTime>
          </DurationContainer>

          <Arrive>
            <Time>{startTime.end}</Time>
            <Place>CTS</Place>
          </Arrive>
        </FlightContainer>
      </DepartContainer>

      <ArrivalContainer>
        <FlightCompany>
          <FlightLogo src={flightImg} alt="항공사 로고" />
          <FlightName>{airName}</FlightName>
        </FlightCompany>

        <FlightContainer>
          <Depart>
            <Time>{endTime.start}</Time>
            <Place>CTS</Place>
          </Depart>

          <DurationContainer>
            <Path>직항</Path>
            <PathArrow src={ArrowImg} alt="화살표" />
            <DurationTime>{endTime.during}</DurationTime>
          </DurationContainer>

          <Arrive>
            <Time>{endTime.end}</Time>
            <Place>ICN</Place>
          </Arrive>
        </FlightContainer>
      </ArrivalContainer>

      <CarbonPriceContainer>
        <Carbon>
          <CarbonImg src={LeafImg} alt="탄소 나뭇잎" />
          <CarbonMsg>탄소배출량</CarbonMsg>
          <CarbonMsgBold>{`${CO2}% 감소`}</CarbonMsgBold>
          <CarbonMsg>항공편</CarbonMsg>
        </Carbon>
        <PriceChooseContainer>
          <Price>{price}</Price>
          <Won>원</Won>
          <ChooseBtn>선택하기</ChooseBtn>
        </PriceChooseContainer>
      </CarbonPriceContainer>
      <Like src={HeartBlackImg} alt="좋아요" />
    </TicketContainer>
  );
};

export default TicketItem;

const TicketContainer = styled.article`
  display: flex;
  position: relative;
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
  width: 22.8rem;
`;

const FlightLogo = styled.img`
  margin-right: 2.4rem;
  width: 4.8rem;
  height: 4.8rem;
`;

const FlightName = styled.span`
  ${({ theme }) => theme.fonts.body06};
`;

const FlightContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Depart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1.7rem;
  width: 7.9rem;
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
  ${({ theme }) => theme.fonts.body04};

  color: ${({ theme }) => theme.colors.skscanGrey500};
`;

const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 1.8rem 0 2rem;
  width: 11.1rem;
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

const CarbonPriceContainer = styled.div`
  display: flex;
  position: absolute;
  right: 3.6rem;
  bottom: 3.6rem;
  flex-direction: column;
  align-items: flex-end;
`;

const Carbon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
`;

const CarbonImg = styled.img`
  margin-right: 0.6rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const CarbonMsg = styled.span`
  color: ${({ theme }) => theme.colors.skscanGreen};
  ${({ theme }) => theme.fonts.body04};
`;
// 폰트 수정 필
const CarbonMsgBold = styled.span`
  margin: 0 0.4rem;
  color: ${({ theme }) => theme.colors.skscanGreen};
  ${({ theme }) => theme.fonts.heading12};
`;

const PriceChooseContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.heading03};
`;
const Won = styled.span`
  margin-right: 2rem;
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.heading07};
`;

const ChooseBtn = styled.button`
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.skscanSecondary2};
  padding: 1.2rem 2.4rem;
  color: ${({ theme }) => theme.colors.skscanSecondary};
  ${({ theme }) => theme.fonts.heading07};
`;
const Like = styled.img`
  position: absolute;
  top: 2.6rem;
  right: 3rem;
  width: 3.6rem;
  height: 3.6rem;
`;
