import * as styled from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}

  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 auto;
    font-size: 62.5%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }

  select {
    cursor: pointer;
  }
`;

export default GlobalStyle;
