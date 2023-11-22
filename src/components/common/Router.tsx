import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import CarouselTest from './Carousel';
import TicketListTest from '../ticketList/TicketListTest';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/test" element={<TicketListTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
