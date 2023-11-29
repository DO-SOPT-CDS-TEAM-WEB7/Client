import styled from 'styled-components';

import Header from '../components/main/Header';
import QnA from '../components/main/QnA';
import RecommendDestination from '../components/main/RecommendDestination';

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <RecommendDestination />
        <QnA />
      </Container>
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
