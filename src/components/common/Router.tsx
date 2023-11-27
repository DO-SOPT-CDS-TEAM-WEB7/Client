import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import PriceCompare from '../../pages/PriceCompare';

import Ticket from '../ticketList/Ticket';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/priceCompare" element={<PriceCompare />} />
        <Route path="/ticketList" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
