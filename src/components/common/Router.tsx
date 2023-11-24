import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import TicketListNav from '../ticketList/TicketListNav';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<TicketListNav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
