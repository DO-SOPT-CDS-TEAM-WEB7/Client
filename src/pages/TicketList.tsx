
import DropBox from '../components/ticketList/DropDown';
import HotelCarousel from '../components/ticketList/HotelCarousel';
import Nav from '../components/ticketList/Nav';

const TicketList = () => {
  return (
    <>
      <Nav />
      <DropBox></DropBox>
      <HotelCarousel />
    </>
  );
};

export default TicketList;
