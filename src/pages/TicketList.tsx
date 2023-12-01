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
      <Background />
      <Nav />
      <BackgroundImg />
      <SearchBar />
      <AdvImg />
      <DropDown />
      <Ticket rangeStart={0} rangeEnd={4} />
      <HotelCarousel />
      <Ticket rangeStart={4} />
      <FooterBackground />
      <Footer />
    </>
  );
};

export default TicketList;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: -99;
  background-color: ${({ theme }) => theme.colors.skscanGrey50};
  width: 100vw;
  height: 100%;
`;

const FooterBackground = styled.div`
  position: absolute;
  right: 0;
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.skscanWt};
  width: 100vw;
  height: 28.3rem;
`;
