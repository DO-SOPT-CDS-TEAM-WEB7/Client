import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import PriceCompare from '../../pages/PriceCompare';
import LowestFlightItem from '../main/LowestFlightItem';
import TicketList from '../../pages/TicketList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LowestFlightItem />} />
        <Route path="/priceCompare" element={<PriceCompare />} />
        <Route path="/ticketList" element={<TicketList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
