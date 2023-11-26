import styled from 'styled-components';

const AirplaneRecommend = () => {
  return (
    <CardContainer>
      <ImgWrapper>
        <Destination>
          <City>제주</City>
          <Country>대한민국</Country>
        </Destination>
      </ImgWrapper>
      <InfoWrapper>
        <PriceLink>
          <Price>218,390원 출발</Price>
        </PriceLink>
      </InfoWrapper>
    </CardContainer>
  );
};

export default AirplaneRecommend;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 0.8rem;
  width: 33.8rem;
  height: 32.6rem;
`;

const ImgWrapper = styled.div`
  padding: 2.5rem;
  width: 100%;
`;

const Destination = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const City = styled.span`
  color: ${({ theme }) => theme.colors.skscanWt};
  ${({ theme }) => theme.fonts.heading05};
`;

const Country = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey50};
  ${({ theme }) => theme.fonts.body04};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: space-between;
  padding: 1.8rem 1.4rem;
`;

const PriceLink = styled.div`
  display: flex;
`;

const Price = styled.span`
  color: ${({ theme }) => theme.colors.skscanSecondary};
  ${({ theme }) => theme.fonts.body05};
`;
