import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import Ticket from '../ticketList/Ticket';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ticketList" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
