import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import PriceCompare from '../../pages/PriceCompare';
import LowestFlightItem from '../main/LowestFlightItem';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LowestFlightItem />} />
        <Route path="/priceCompare" element={<PriceCompare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
