import { createRoot } from "react-dom/client";
import App from "./component/app/App";
import "./index.scss";
import { worker } from "./mock/worker";

worker.start();
createRoot(document.getElementById("root")).render(<App />);
