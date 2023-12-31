import styled from 'styled-components';

import { BannerAd1Img, BannerAd2Img, BeforeReservationBtn } from '../../assets/image';
import { TicketListDto } from '../../types/ticketReservationInfo';
// eslint-disable-next-line import/order
import AgencyTicket from './AgencyTicket';

interface AgencyTicketListProps {
  ticketListData?: TicketListDto[];
}

const AgencyTicketList = (props: AgencyTicketListProps) => {
  const { ticketListData } = props;

  return (
    <>
      <AdImg src={BannerAd1Img} alt="호텔 최저가 비교도 역시 스카이스캐너 에서" $order={1} />
      <SmallHeader>
        <TicketReservationText>티켓 예약하기</TicketReservationText>
        <StyledImg src={BeforeReservationBtn} />
      </SmallHeader>
      {ticketListData?.slice(0, 4).map((item) => <AgencyTicket key={item.ticketId} item={item} />)}
      <AdImg src={BannerAd2Img} alt="렌터카 찾고 계신가요? 최저가 비교 바로가기" $order={2} />
      {ticketListData?.slice(5, 9).map((item) => <AgencyTicket key={item.ticketId} item={item} />)}
    </>
  );
};

export default AgencyTicketList;

const AdImg = styled.img<{ $order: number }>`
  margin-top: ${({ $order }) => ($order === 1 ? '6rem' : '4rem')};
  width: 100%;
  height: 9.2rem;
`;

const SmallHeader = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  margin-top: 6rem;
`;

const TicketReservationText = styled.span`
  ${({ theme }) => theme.fonts.heading10}

  color:${({ theme }) => theme.colors.skscanBk}
`;

const StyledImg = styled.img`
  width: 13.6rem;
  height: 2.5rem;
`;
