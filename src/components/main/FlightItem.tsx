import styled from 'styled-components';

export interface FlightItemProps {
  flightImg: string;
  flightName: string;
}

const FlightItem = (props: FlightItemProps) => {
  const { flightImg, flightName } = props;

  return (
    <FlightItemContainer>
      <FlightImg src={flightImg} alt="flightimg" />
      <Content>
        <FlightTitle>{flightName}행</FlightTitle>
        <Price>최저가 32,000원 ~</Price>
      </Content>
    </FlightItemContainer>
  );
};

export default FlightItem;

const FlightItemContainer = styled.article`
  position: relative;
  height: 21.7rem;
`;

const FlightImg = styled.img`
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

const FlightTitle = styled.span`
  ${({ theme }) => theme.fonts.heading05};

  color: ${({ theme }) => theme.colors.skscanWt};
`;

const Price = styled.span`
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding: 1.2rem 1.8rem;
  width: max-content;
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading13};
`;
