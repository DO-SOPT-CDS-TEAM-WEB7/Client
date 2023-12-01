import { useState } from 'react';
import styled from 'styled-components';

import { ArrowDownBlueIcon, ArrowUpBlueIcon, MovingArrowIcon, VerticalLineIcon } from '../../assets/icon';
import TICKET_AIR_IMG from '../../data/TicketItemData';
import { AirResultDto } from '../../types/ticketReservationInfo';
interface TicketInfoListProps {
  airResultData?: AirResultDto;
  isStartTicket?: boolean;
}

const TicketInfo = (props: TicketInfoListProps) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const { airResultData, isStartTicket } = props;

  const dateInfo = isStartTicket ? airResultData?.dateDto.startDate : airResultData?.dateDto.endDate;
  const movingInfo = isStartTicket ? airResultData?.startTime : airResultData?.endTime;

  const dateFormatter = (date?: string): string => {
    let tempDate = date && date.toString();

    const year = tempDate && tempDate.substring(0, 4);
    const month = tempDate && tempDate.substring(5, 7);
    const day = tempDate && tempDate.substring(8, 10);
    let weekday = tempDate && tempDate.substring(11, 15);

    const cases: Record<string, string> = {
      Mon: '월',
      Tue: '화',
      Wed: '수',
      Thu: '목',
      Fri: '금',
      Sat: '토',
      Sun: '일',
    };
    if (weekday) weekday = cases[weekday];

    tempDate = `${year}년 ${month}월 ${day}일 (${weekday})`;

    return tempDate;
  };

  const airlineImageGetter = (airName: string): string => {
    const flight = TICKET_AIR_IMG.filter((item) => item.airName === airName);
    const flightImg = flight[0].airImg;
    return flightImg;
  };

  return (
    <TicketInfoContainer>
      {airResultData && movingInfo && (
        <>
          <InfoTitle>
            <TitleLeft>
              <Title>{isStartTicket ? '가는 날' : '오는 날'} 출발시간</Title>
              <SubText>{dateFormatter(dateInfo)}</SubText>
            </TitleLeft>
            {isStartTicket && <SubText>모든 시간은 현지 시간</SubText>}
          </InfoTitle>
          <InfoContents $isToggleOpen={isToggleOpen}>
            <AirLineInfo>
              <Logo src={airlineImageGetter(airResultData.airName)} alt={airResultData.airName} />
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
            {isToggleOpen ? (
              <StyledToggleImg src={ArrowUpBlueIcon} onClick={() => setIsToggleOpen(false)} />
            ) : (
              <StyledToggleImg src={ArrowDownBlueIcon} onClick={() => setIsToggleOpen(true)} />
            )}
          </InfoContents>
          {isToggleOpen && (
            <MoreInfoContents>
              <SmallDuration>{movingInfo.during}</SmallDuration>
              <StyledVerticalLineImg src={VerticalLineIcon} />
              <MovingInfoWrapper>
                <AirlineInfo>{airResultData.airName} KAL KE723</AirlineInfo>
                <MovingInfoContainer>
                  <SmallInfoBold>{movingInfo.start}</SmallInfoBold>
                  <SmallInfo>ICN</SmallInfo>
                  <SmallInfo>인천국제공항</SmallInfo>
                </MovingInfoContainer>
                <MovingInfoContainer>
                  <SmallInfoBold>{movingInfo.end}</SmallInfoBold>
                  <SmallInfo>CTS</SmallInfo>
                  <SmallInfo>삿포로치토세</SmallInfo>
                </MovingInfoContainer>
              </MovingInfoWrapper>
            </MoreInfoContents>
          )}
        </>
      )}
    </TicketInfoContainer>
  );
};

export default TicketInfo;

const TicketInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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

const InfoContents = styled.article<{ $isToggleOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.skscanGrey200};
  border-bottom: ${({ $isToggleOpen }) => $isToggleOpen && '0'};
  border-radius: 1.5rem;
  border-bottom-left-radius: ${({ $isToggleOpen }) => $isToggleOpen && '0'};
  border-bottom-right-radius: ${({ $isToggleOpen }) => $isToggleOpen && '0'};
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

const StyledToggleImg = styled.img`
  cursor: pointer;
`;

const MoreInfoContents = styled.article`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.skscanGrey200};
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding: 1.8rem 3.6rem;
  width: 100%;
  height: 15.7rem;
`;

const SmallDuration = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.caption02}
`;

const StyledVerticalLineImg = styled.img`
  margin-right: 3rem;
  margin-left: 1.2rem;
  width: 0.6rem;
  height: 4.5rem;
`;

const MovingInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 24rem;
`;

const SmallInfoBold = styled.span`
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.body05}
`;

const SmallInfo = styled.span`
  color: ${({ theme }) => theme.colors.skscanBk};
  ${({ theme }) => theme.fonts.body06}
`;

const MovingInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AirlineInfo = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey400};
  ${({ theme }) => theme.fonts.caption02}
`;
