import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import AGENCY_IMG from '../../data/AgencyData';
import STARS_IMG from '../../data/StarsImgData';
import { userInputState, userInputType } from '../../states/userInputState';
import { TicketListDto } from '../../types/ticketReservationInfo';

interface AgencyTicketProps {
  item: TicketListDto;
}

const AgencyTicket = (props: AgencyTicketProps) => {
  const { item } = props;

  const setUserInput = useSetRecoilState(userInputState);

  const navigate = useNavigate();
  const handleTicketSelect = (ticketId: number) => {
    setUserInput((prev: userInputType) => ({
      ...prev,
      ticketId: ticketId,
    }));
    navigate('/priceCompare');
  };
  return (
    <AgencyTicketContainer>
      <AgencyContainer>
        <AgencyImg src={AGENCY_IMG[item.companyName]} alt={item.companyName} />
        <AgencyName>{item.companyName}</AgencyName>
      </AgencyContainer>
      <StarsImg src={STARS_IMG[item.stars]} alt={`별점 ${item.stars}점`} />
      <Benefit>최저가 혜택 : {item.card}</Benefit>
      <PriceChooseContainer>
        <PriceContainer>
          <Sum>합계</Sum>
          <Price>₩{item.price}</Price>
        </PriceContainer>
        <ChooseBtn onClick={() => handleTicketSelect(item.ticketId)}>선택하기</ChooseBtn>
      </PriceChooseContainer>
    </AgencyTicketContainer>
  );
};

export default AgencyTicket;

const AgencyTicketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.skscanGrey200};
  padding-bottom: 2.7rem;
`;

const AgencyImg = styled.img`
  width: 7.2rem;
  height: 5.3rem;
`;

const AgencyName = styled.span`
  ${({ theme }) => theme.fonts.body03}

  color:${({ theme }) => theme.colors.skscanBk}
`;

const AgencyContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  width: 21.1rem;
`;

const StarsImg = styled.img`
  width: 10.9rem;
  height: 2rem;
`;

const Benefit = styled.span`
  ${({ theme }) => theme.fonts.caption04}

  color:${({ theme }) => theme.colors.skscanGrey700};
`;

const PriceContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Sum = styled.span`
  ${({ theme }) => theme.fonts.caption05}

  color:${({ theme }) => theme.colors.skscanGrey700}
`;

const Price = styled.span`
  ${({ theme }) => theme.fonts.heading06}

  color:${({ theme }) => theme.colors.skscanPrimary}
`;

const ChooseBtn = styled.button`
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.skscanSecondary2};
  padding: 1.2rem 2.4rem;
  color: ${({ theme }) => theme.colors.skscanSecondary};
  ${({ theme }) => theme.fonts.heading07};
`;

const PriceChooseContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  align-items: center;
`;
