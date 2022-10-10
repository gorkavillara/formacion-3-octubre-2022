import React from "react";
import "./App.scss";
import NavBar from "./components/common/NavBar";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import { ThemeProvider } from "@mui/material";

import { nuestroTema, segundoTema } from "./themes"

function App() {
  return (
    <ThemeProvider theme={segundoTema}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
