import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { HorizontalLineIcon, RightArrowICon } from '../../assets/icon';
import { GotoSiteBtnImg } from '../../assets/image';
import { siteMovingState } from '../../states/siteMovingState';
const TicketDetail = () => {
  const siteMoving = useRecoilValue(siteMovingState);

  return (
    <>
      <TicketDetailContainer>
        <AirportInfoList>
          <AirportInfoContainer>
            <AirportInfoEng>
              ICN
              <StyledImg src={RightArrowICon} alt="오른쪽 화살표" />
              CTS
            </AirportInfoEng>
            <AirportInfoKor>인천:삿포로</AirportInfoKor>
            <AirportInfoKor>{siteMoving.startDateTime}</AirportInfoKor>
          </AirportInfoContainer>
          <AirportInfoContainer>
            <AirportInfoEng>
              ICN
              <StyledImg src={RightArrowICon} alt="오른쪽 화살표" />
              CTS
            </AirportInfoEng>
            <AirportInfoKor>인천:삿포로</AirportInfoKor>
            <AirportInfoKor>{siteMoving.endDateTime}</AirportInfoKor>
          </AirportInfoContainer>
        </AirportInfoList>
        <TicketInfoContainer>
          <PassengerInfo>성인 1명 • 일반석</PassengerInfo>
          <Price>{siteMoving.price}</Price>
        </TicketInfoContainer>
      </TicketDetailContainer>
      <StyledImg src={HorizontalLineIcon} />
      <GotoBtn src={GotoSiteBtnImg} />
    </>
  );
};

export default TicketDetail;

const TicketDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.5rem;
  margin-bottom: 3.2rem;
  padding: 1rem;
  width: 53.4rem;
`;

const AirportInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AirportInfoContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const AirportInfoEng = styled.span`
  ${({ theme }) => theme.fonts.caption03}

  color:${({ theme }) => theme.colors.skscanWt}
`;

const StyledImg = styled.img`
  width: max-content;
  height: max-content;
`;

const AirportInfoKor = styled.span`
  ${({ theme }) => theme.fonts.caption05}

  color:${({ theme }) => theme.colors.skscanWt}
`;

const TicketInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  align-items: end;
`;

const PassengerInfo = styled.span`
  ${({ theme }) => theme.fonts.caption04}

  color:${({ theme }) => theme.colors.skscanWt}
`;

const Price = styled.span`
  ${({ theme }) => theme.fonts.heading11}

  color:${({ theme }) => theme.colors.skscanWt}
`;

const GotoBtn = styled.img`
  margin-top: 14.4rem;
  cursor: pointer;
  width: 40rem;
  height: 5rem;
`;
