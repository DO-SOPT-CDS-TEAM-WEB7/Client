import styled from 'styled-components';

import { MainBannerImg } from '../assets/image';
import Footer from '../components/common/Footer';
import Header from '../components/main/Header';
import Insight from '../components/main/Insight';
import LowestFlights from '../components/main/LowestFlights';
import Nav from '../components/main/Nav';
import QnA from '../components/main/QnA';
import RecommendDestination from '../components/main/RecommendDestination';
import RecommendFlight from '../components/main/RecommendFlight';

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Nav />
        <Insight />
        <RecommendDestination />
        <RecommendFlight />
        <ADImg src={MainBannerImg} alt="MainBannerImg" />
        <LowestFlights />
        <QnA />
      </Container>
      <Footer />
    </>
  );
};

export default Main;

const Container = styled.main`
  display: flex;
  position: relative;
  top: 14.6rem;
  flex-direction: column;
  gap: 10rem;
  margin-bottom: 14.6rem;
`;

const ADImg = styled.img`
  object-fit: contain;
`;
