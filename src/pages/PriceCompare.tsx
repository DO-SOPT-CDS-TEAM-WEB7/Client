import styled from 'styled-components';

import Banner from '../components/priceCompare/Banner';
import Header from '../components/priceCompare/Header';
import TicketInfoList from '../components/priceCompare/TicketInfoList';
const PriceCompare = () => {
  return (
    <PriceCompoareContainer>
      <Header />
      <Banner />
      <TicketInfoList />
    </PriceCompoareContainer>
  );
};

export default PriceCompare;

const PriceCompoareContainer = styled.div`
  position: absolue;
  background-color: ${({ theme }) => theme.colors.skscanGrey50};
  width: 100%;
  height: 100%;
`;
