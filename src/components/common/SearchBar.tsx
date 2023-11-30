import styled from 'styled-components';

import { CheckboxImg } from '../../assets/image';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <FlightWayContainer>
        <RoundOnewayContainer>
          <WayBtn clicked={true}>왕복</WayBtn>
          <WayBtn clicked={false}>편도</WayBtn>
          <WayBtn clicked={false}>다구간</WayBtn>
        </RoundOnewayContainer>
        <DirectFlightContainer>
          <Checkbox src={CheckboxImg} alt="체크박스" />
          <DirectFlight>직항 항공편</DirectFlight>
        </DirectFlightContainer>
      </FlightWayContainer>

      <FlightInfoContainer>
        <InfoDiv last={false}>
          <InfoTitle>출발지</InfoTitle>
          <InfoDeparture>서울 (모두)</InfoDeparture>
        </InfoDiv>
        <InfoDiv last={false}>
          <InfoTitle>도착지</InfoTitle>
          <InfoDestination>삿포로</InfoDestination>
        </InfoDiv>
        <InfoDateContainer>
          <InfoTitle>출발일 - 도착일</InfoTitle>
          <InfoDate></InfoDate>
        </InfoDateContainer>
        <InfoDiv last={true}>
          <InfoTitle>인원, 좌석등급</InfoTitle>
          <InfoSeat>1명, 일반석</InfoSeat>
        </InfoDiv>
        <SearchBtn>검색하기</SearchBtn>
      </FlightInfoContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;
  ${({ theme }) => theme.effects.boxDrop}

  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: 100%;
`;

const FlightWayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.skscanGrey100};
  padding: 0 2rem;
`;

const RoundOnewayContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin: 1.75rem 0;
  margin-right: 66.8rem;
`;

const WayBtn = styled.div<{ clicked: boolean }>`
  border-radius: 2rem;
  background-color: ${({ clicked, theme }) => (clicked ? theme.colors.skscanSecondary : theme.colors.skscanGrey100)};
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  color: ${({ clicked, theme }) => (clicked ? theme.colors.skscanWt : theme.colors.skscanGrey800)};
  ${({ clicked, theme }) => (clicked ? theme.fonts.heading12 : theme.fonts.body04)};
`;

const DirectFlightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2.4rem 0;
`;

const Checkbox = styled.img`
  margin-right: 1rem;
  width: 2.4rem;
  height: 2.4rem;
`;

const DirectFlight = styled.span`
  color: ${({ theme }) => theme.colors.skscanGrey800};
  ${({ theme }) => theme.fonts.body04};
`;

const FlightInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoDiv = styled.div<{ last: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  ${({ last, theme }) => (last ? '' : `border-right: 1px solid ${theme.colors.skscanGrey150};`)};

  padding: 3rem 0 3rem 2rem;
`;

const InfoDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border-right: 1px solid ${({ theme }) => theme.colors.skscanGrey150};
  padding: 3rem 0 3rem 2rem;
  width: 22.9rem;
`;

const InfoTitle = styled.span`
  margin-bottom: 0.2rem;
  color: ${({ theme }) => theme.colors.skscanGrey400};
  ${({ theme }) => theme.fonts.body04};
`;

const InfoDeparture = styled.span`
  margin-right: 11.3rem;
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading09};
`;
const InfoDestination = styled.span`
  margin-right: 17.7rem;
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading09};
`;

const InfoDate = styled.span`
  margin-right: 1.3rem;
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading09};
`;

const InfoSeat = styled.span`
  margin-right: 8.5rem;
  color: ${({ theme }) => theme.colors.skscanGrey900};
  ${({ theme }) => theme.fonts.heading09};
`;

const SearchBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.2rem 0;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.skscanSecondary};
  cursor: pointer;
  padding: 2.15rem 2.85rem;
  width: 12rem;
  height: 6.4rem;
  color: ${({ theme }) => theme.colors.skscanWt};
  ${({ theme }) => theme.fonts.heading12};
`;
