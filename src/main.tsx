import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import "./index.css";
import { worker } from "./mock/worker";

worker.start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
