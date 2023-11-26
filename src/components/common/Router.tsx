import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import HotelItem from '../ticketList/HotelCarousel';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ticketList" element={<HotelItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
