import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import PriceCompare from '../../pages/PriceCompare';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/priceCompare" element={<PriceCompare />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
