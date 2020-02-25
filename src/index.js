import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import { Typography, GlobalStyle } from "src/config/globalStyle";
import { Light } from "src/config/tema";
import Routers from "./router";

const App = () => (
  <ThemeProvider theme={Light}>
    <Routers />
    <Typography />
    <GlobalStyle />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
