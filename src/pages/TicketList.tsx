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
      <Nav />
      <BackgroundImg />
      <SearchBar />
      <AdvImg />
      <DropDown />
      <Ticket />
      <HotelCarousel />
    </>
  );
};

export default TicketList;
