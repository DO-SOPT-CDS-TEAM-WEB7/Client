import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SearchBar from './SearchBar';
import Main from '../../pages/Main';
import PriceCompare from '../../pages/PriceCompare';
import Calendar from '../main/Calendar';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/priceCompare" element={<PriceCompare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
