import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import PriceCompare from '../../pages/PriceCompare';
import SiteMoving from '../../pages/SiteMoving';
import TicketList from '../../pages/TicketList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/priceCompare" element={<PriceCompare />} />
        <Route path="/ticketList" element={<TicketList />} />
        <Route path="/siteMoving" element={<SiteMoving />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
