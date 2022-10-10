import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import AppContextProvider from "./contexts/AppContextProvider";

const instalaElServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    return await navigator.serviceWorker.register("/sw.js");
  }
};

const pedirPermiso = async () => {
  const resultado = await Notification.requestPermission();
  console.log(resultado);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

instalaElServiceWorker().then(() => pedirPermiso());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
