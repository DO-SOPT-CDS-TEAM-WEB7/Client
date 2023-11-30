import styled from 'styled-components';

import { ArrowRightBlueIcon } from '../../assets/icon';
import { ParisImg, SampleAirlineImg } from '../../assets/image';
import { MainApiData } from '../../types/Main';

const LowestFlightItem = (props: MainApiData) => {
  const { cityName, country, startDate, endDate, companyAir, minPriceString } = props;

  return (
    <CardContainer>
      <ImgWrapper>
        <DesImg src={ParisImg} alt="ParisImg" />
        <Destination>
          <City>{cityName}</City>
          <Country>{country}</Country>
        </Destination>
      </ImgWrapper>
      <InfoWrapper>
        <TwoWayFlight>
          <Flight>
            <AirlineImg src={SampleAirlineImg} alt="SampleAirlineImg" />
            <FlightInfo>
              <FlightDetail>
                <FlightDate>{startDate.toString()}</FlightDate>
                <FlightCode>{companyAir} TAE - CJU 항공</FlightCode>
              </FlightDetail>
              <FlightType>직항</FlightType>
            </FlightInfo>
          </Flight>
          <Flight>
            <AirlineImg src={SampleAirlineImg} alt="SampleAirlineImg" />
            <FlightInfo>
              <FlightDetail>
                <FlightDate>{endDate.toString()}</FlightDate>
                <FlightCode>{companyAir} TAE - CJU 항공</FlightCode>
              </FlightDetail>
              <FlightType>직항</FlightType>
            </FlightInfo>
          </Flight>
        </TwoWayFlight>
        <PriceLink>
          <Price>{minPriceString}</Price>
          <ImgIcon src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" />
        </PriceLink>
      </InfoWrapper>
    </CardContainer>
  );
};

export default LowestFlightItem;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.8rem;
  width: 33.8rem;
  height: 32.6rem;
  ${({ theme }) => theme.effects.boxDrop};
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 12.8rem;
`;

const DesImg = styled.img`
  border-radius: 0.8rem 0.8rem 0 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const Destination = styled.div`
  display: flex;
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
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
  border-radius: 0 0 0.8rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  padding: 1.8rem 1.4rem;
  width: 100%;
  height: 19.8rem;
`;

const TwoWayFlight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  height: 100%;
`;

const Flight = styled.div`
  display: flex;
  position: relative;
  gap: 1.2rem;
  width: 100%;
`;

const AirlineImg = styled.img`
  object-fit: contain;
  width: 4.8rem;
  height: 4.8rem;
`;

const FlightInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const FlightDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FlightDate = styled.span`
  ${({ theme }) => theme.fonts.heading13};

  color: ${({ theme }) => theme.colors.skscanGrey900};
`;

const FlightCode = styled.span`
  white-space: nowrap;
  ${({ theme }) => theme.fonts.body06};

  color: ${({ theme }) => theme.colors.skscanGrey600};
`;

const FlightType = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  ${({ theme }) => theme.fonts.body06};

  color: ${({ theme }) => theme.colors.skscanGrey900};
`;

const PriceLink = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Price = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.skscanSecondary};
  ${({ theme }) => theme.fonts.body05};
`;

const ImgIcon = styled.img`
  object-fit: contain;
`;
