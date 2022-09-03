import React from "react";
import "./app.scss";
import { Footer, Header, Main } from "./component";

const App: React.FC = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
