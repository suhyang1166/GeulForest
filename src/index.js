import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createGlobalStyle } from "styled-components";
import { StyledEngineProvider } from "@mui/material/styles";

const GlobalStyle = createGlobalStyle`
/* reset & font */
@import url(./assets/font/Font.css);
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}

body {
    font-family: "SD M";
    width:100%;
    max-width:500px;
    margin: 0 auto;
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <GlobalStyle />
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </Provider>
);
