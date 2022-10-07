import React from "react";
import "./App.scss";
import NavBar from "./components/common/NavBar";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
