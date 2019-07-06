import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  strong, b {
    font-weight: bolder;
  }
  body {
    color: rgba(0, 0, 0, 0.87);
    margin: 0;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background-color: #fafafa;
  }
  @media print {
    body {
      background-color: #fff;
    }
  }
`;

// 1rem = 16px

export default GlobalStyle;
