import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/global";
import { theme } from "./Styles/theme";
import { BuyProvider } from "./Context/BuyProvider";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <BuyProvider>
          <App />
        </BuyProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
