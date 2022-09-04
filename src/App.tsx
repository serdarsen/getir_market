import React from "react";
import { Provider } from "react-redux";
import "./app.scss";
import { Footer, Header, Main } from "./component";
import { ReduxStore } from "./service/ReduxStore";

const App: React.FC = () => (
  <Provider store={ReduxStore}>
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);

export default App;
