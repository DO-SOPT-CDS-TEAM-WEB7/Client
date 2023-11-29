import styled from 'styled-components';

export interface DesItemProps {
  desImg: string;
  desName: string;
}

const DesItem = (props: DesItemProps) => {
  const { desImg, desName } = props;

  return (
    <DesItemContainer>
      <DesImg src={desImg} alt="desimg" />
      <Content>
        <Info>
          <DesTitle>{desName}</DesTitle>
          <DesInfo>항공편 · 호텔 · 렌터카</DesInfo>
        </Info>
        <LookBtn>둘러보기</LookBtn>
      </Content>
    </DesItemContainer>
  );
};

export default DesItem;

const DesItemContainer = styled.article`
  position: relative;
  height: 33.2rem;
`;

const DesImg = styled.img`
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem 2.4rem;
  height: 100%;
`;

const Info = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DesTitle = styled.span`
  ${({ theme }) => theme.fonts.heading05};

  color: ${({ theme }) => theme.colors.skscanWt};
`;

const DesInfo = styled.span`
  ${({ theme }) => theme.fonts.body04};

  color: ${({ theme }) => theme.colors.skscanGrey50};
`;

const LookBtn = styled.span`
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding: 1.2rem 1.8rem;
  width: max-content;
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.body04};
`;
