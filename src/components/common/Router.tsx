import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import Insight from '../main/Insight';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Insight />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
