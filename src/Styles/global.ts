// src/styles/global.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');


  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    min-height: 100vh;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    padding-bottom: 40px;
    padding-left: 180px;
    padding-right: 180px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  .app-root {
    flex: 1 0 auto; 
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 40px);
  }
`;
