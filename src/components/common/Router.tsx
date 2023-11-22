import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Carousel from './Carousel';
import Main from '../../pages/Main';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
