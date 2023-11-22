import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CarouselTest from '../priceCompare/CarouselTest';
import Main from '../../pages/Main';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<CarouselTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
