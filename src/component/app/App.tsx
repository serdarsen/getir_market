import React from "react";
import { Provider } from "react-redux";
import { Footer, Header, Main } from "..";
import { reduxStore } from "../../context/reduxStore";
import "./app.scss";

const App: React.FC = () => (
  <Provider store={reduxStore}>
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);

export default App;
