import React from "react";
import ReactDOMClient from "react-dom/client";
import { OllieLandingPage } from "./screens/OllieLandingPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OllieLandingPage />);
