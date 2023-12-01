import styled from 'styled-components';

import { ArrowDownBlueIcon, MovingArrowIcon } from '../../assets/icon';
import { AirResultDto } from '../../types/ticketReservationInfo';

interface TicketInfoListProps {
  airResultData?: AirResultDto;
  isStartTicket?: boolean;
}

const TicketInfo = (props: TicketInfoListProps) => {
  const { airResultData, isStartTicket } = props;

  const dateInfo = isStartTicket ? airResultData?.dateDto.startDate : airResultData?.dateDto.endDate;
  const movingInfo = isStartTicket ? airResultData?.startTime : airResultData?.endTime;

  return (
    <TicketInfoContainer>
      {airResultData && movingInfo && (
        <>
          <InfoTitle>
            <TitleLeft>
              <Title>{isStartTicket ? '가는 날' : '오는 날'} 출발시간</Title>
              <SubText>{dateInfo}</SubText>
            </TitleLeft>
            {isStartTicket && <SubText>모든 시간은 현지 시간</SubText>}
          </InfoTitle>
          <InfoContents>
            <AirLineInfo>
              <Logo />
              <AirLineName>{airResultData.airName}</AirLineName>
            </AirLineInfo>
            <PassengerInfo>성인 1명 • 일반석</PassengerInfo>
            <MovingInfo>
              <DepartInfo>
                <Time>{movingInfo.start}</Time>
                <AirPort>ICN</AirPort>
              </DepartInfo>
              <MovingDetail>
                <MovingType>직항</MovingType>
                <StyledArrowImg src={MovingArrowIcon} />
                <MovingDuration>{movingInfo.during}</MovingDuration>
              </MovingDetail>
              <ArriveInfo>
                <Time>{movingInfo.end}</Time>
                <AirPort>CTS</AirPort>
              </ArriveInfo>
            </MovingInfo>
            <PassengerInfo>무료 수하물 1개 • 직항</PassengerInfo>
            <StyledToggleImg src={ArrowDownBlueIcon} />
          </InfoContents>
        </>
      )}
    </TicketInfoContainer>
  );
};

export default TicketInfo;

const TicketInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleLeft = styled.div`
  display: flex;
  gap: 1.9rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.heading10};

  color: ${({ theme }) => theme.colors.skscanBk};
`;

const SubText = styled.small`
  ${({ theme }) => theme.fonts.caption05}

  color:${({ theme }) => theme.colors.skscanBk}
`;

const InfoContents = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.skscanGrey200};
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding: 1.8rem 3.6rem;
  width: 100%;
  height: 10rem;
`;

const AirLineInfo = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const Logo = styled.img`
  width: 4.8rem;
  height: 4.8rem;
`;

const AirLineName = styled.span`
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.body06};
`;

const PassengerInfo = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey400};
  ${({ theme }) => theme.fonts.caption02};
`;

const MovingInfo = styled.div`
  display: flex;
  gap: 2.2rem;
  align-items: center;
  justify-content: center;
`;

const DepartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ArriveInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Time = styled.span`
  ${({ theme }) => theme.fonts.heading08}

  color:${({ theme }) => theme.colors.skscanBk}
`;

const AirPort = styled.span`
  ${({ theme }) => theme.fonts.body04}

  color:${({ theme }) => theme.colors.skscanGrey500}
`;

const MovingDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 6.4rem;
`;

const MovingType = styled.span`
  ${({ theme }) => theme.fonts.body06}

  color:${({ theme }) => theme.colors.skscanSecondary}
`;

const MovingDuration = styled.span`
  ${({ theme }) => theme.fonts.body06}

  color:${({ theme }) => theme.colors.skscanGrey500};
`;

const StyledArrowImg = styled.img`
  width: 100%;
  height: 0.6rem;
`;

const StyledToggleImg = styled.img``;
