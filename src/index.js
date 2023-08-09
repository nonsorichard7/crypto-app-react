import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./Redux/Store";

import { ApiProvider } from "@reduxjs/toolkit/query/react";

import { cryptoApi } from "./Services/cryptoApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ApiProvider api={cryptoApi} store={Store}>
        <App />
      </ApiProvider>
    </Router>
  </React.StrictMode>
);
