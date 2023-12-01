import styled from 'styled-components';

const TicketInfo = () => {
  return (
    <TicketInfoContainer>
      <InfoTitle>
        <TitleLeft>
          <Title>가는 날 출발시간</Title>
          <SubText>2023년 12월 22일 (금)</SubText>
        </TitleLeft>
        <SubText>모든 시간은 현지 시간</SubText>
      </InfoTitle>
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
