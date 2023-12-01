import styled from 'styled-components';

import Footer from '../components/common/Footer';
import Header from '../components/main/Header';
import Insight from '../components/main/Insight';
import QnA from '../components/main/QnA';
import RecommendDestination from '../components/main/RecommendDestination';
import RecommendFlight from '../components/main/RecommendFlight';

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Insight />
        <RecommendDestination />
        <RecommendFlight />
        <QnA />
      </Container>
      <Footer />
    </>
  );
};

export default Main;

export const Container = styled.main`
  display: flex;
  position: relative;
  top: 14.6rem;
  flex-direction: column;
  gap: 10rem;
`;
