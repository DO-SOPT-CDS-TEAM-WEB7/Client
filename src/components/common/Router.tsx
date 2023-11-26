import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import AirplaneRecommend from '../main/AirplaneRecommend';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AirplaneRecommend />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
