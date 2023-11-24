import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import TicketListTest from '../ticketList/TicketListTest';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ticketList" element={<TicketListTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
