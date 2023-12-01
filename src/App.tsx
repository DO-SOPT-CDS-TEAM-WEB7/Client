import { RecoilRoot } from 'recoil';
import styled, { ThemeProvider } from 'styled-components';

import Router from './components/common/Router';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <Container>
          <Router />
        </Container>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
const Container = styled.div`
  width: 1046px;

  @media (width <=1046px) {
    position: absolute;
    left: 0;
  }
`;
