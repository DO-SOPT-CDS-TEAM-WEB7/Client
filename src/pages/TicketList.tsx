import styled from 'styled-components';

import Footer from '../components/common/Footer';
import SearchBar from '../components/common/SearchBar';
import AdvImg from '../components/ticketList/AdvImg';
import BackgroundImg from '../components/ticketList/BackgroundImg';
import DropDown from '../components/ticketList/DropDown';
import HotelCarousel from '../components/ticketList/HotelCarousel';
import Nav from '../components/ticketList/Nav';
import Ticket from '../components/ticketList/Ticket';

const TicketList = () => {
  return (
    <>
      <TicketListContainer />
      <Nav />
      <BackgroundImg />
      <SearchBar />
      <AdvImg />
      <DropDown />
      <Ticket rangeStart={0} rangeEnd={4} />
      <HotelCarousel />
      <Ticket rangeStart={4} />
      <Footer />
    </>
  );
};

export default TicketList;

const TicketListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  background-color: ${({ theme }) => theme.colors.skscanGrey50};
  width: 100%;
  height: 100%;
`;
