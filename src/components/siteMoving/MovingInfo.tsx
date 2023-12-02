import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { postTicketReservation } from '../../apis/postTicketReservation';
import { LogoBigIcon } from '../../assets/icon';
import { MovingAirplane } from '../../assets/image';
import AGENCY_NO_BG_IMG from '../../data/AgencyNoBgData';
import { siteMovingState } from '../../states/siteMovingState';
import { userInputState } from '../../states/userInputState';
// eslint-disable-next-line import/order
import TicketDetail from './TicketDetail';
const MovingInfo = () => {
  const userInput = useRecoilValue(userInputState);

  const [siteMoving, setSiteMoving] = useRecoilState(siteMovingState);

  const postTicket = async () => {
    try {
      const {
        data: { data },
      } = await postTicketReservation(userInput);

      setSiteMoving(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    postTicket();
  }, []);
  return (
    <MovingInfoContainer>
      <Title>예약 사이트로 이동 중 입니다.</Title>
      <MovingIllust>
        <StyledImg src={LogoBigIcon} />
        <StyledImg src={MovingAirplane} />
        <StyledImg src={AGENCY_NO_BG_IMG[siteMoving.companyName]} />
      </MovingIllust>
      <TicketDetail />
    </MovingInfoContainer>
  );
};

export default MovingInfo;

const MovingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.skscanWt};
  ${({ theme }) => theme.fonts.heading04}
`;

const MovingIllust = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5.4rem;
  border: 1px solid ${({ theme }) => theme.colors.skscanWt};
  border-radius: 1rem;
  background-color: rgb(255 255 255 / 40%);
  padding: 3.8rem 2.3rem;
  backdrop-filter: blur(3px);
`;

const StyledImg = styled.img`
  width: min-content;
  height: min-content;
`;
