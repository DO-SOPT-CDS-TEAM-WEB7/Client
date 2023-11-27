import React from 'react';

import HotelCarousel from '../components/ticketList/HotelCarousel';
import Ticket from '../components/ticketList/Ticket';

const TicketList = () => {
  return (
    <>
      <HotelCarousel></HotelCarousel>
      <Ticket></Ticket>
    </>
  );
};

export default TicketList;
