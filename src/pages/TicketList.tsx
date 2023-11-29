import SearchBar from '../components/common/SearchBar';
import BackgroundImg from '../components/ticketList/BackgroundImg';
import HotelCarousel from '../components/ticketList/HotelCarousel';
import Nav from '../components/ticketList/Nav';

const TicketList = () => {
  return (
    <>
      <Nav />
      <BackgroundImg />
      <SearchBar />
      <HotelCarousel />
    </>
  );
};

export default TicketList;
