import React from "react";
import ReactDOMClient from "react-dom/client";
import { OllieLandingPage } from "./src/Pages/LandingPage";
import { Provider } from "react-redux";

import { store } from "./src/Features/store";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <Provider store={store}>
    <OllieLandingPage />
  </Provider>
);
