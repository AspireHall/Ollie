import React from "react";
import ReactDOMClient from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./src/Pages/App";
import { OllieLandingPage } from "./src/index";
import AboutPage from "./src/Pages/About/AboutPage";
import NewsPage from "./src/Pages/NewsPage/NewsPage";
import NFTsPage from "./src/Pages/NFTs/NFTsPage";
import { Provider } from "react-redux";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <OllieLandingPage />,
      },
      {
        path: "/PriceTicks",
        element: <PriceTickPage />,
      },
      {
        path: "/Games",
        element: <GamesPage />,
      },
      {
        path: "/Services",
        element: <ServicesPage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/News",
        element: <NewsPage />,
      },
      {
        path: "/NFTs",
        element: <NFTsPage />,
      },
    ],
  },
]);

import { store } from "./src/Features/store";
import PriceTickPage from "./src/Pages/PriceTickPage/PriceTickPage";
import GamesPage from "./src/Pages/GamesPage/GamesPage";
import ServicesPage from "./src/Pages/Services/ServicesPage";
import NFTsPage from "./src/Pages/NFTs/NFTsPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
