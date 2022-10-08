import { Provider } from "react-redux";
import { Footer, Header, Main } from "..";
import { store } from "../../context";
import "./app.scss";

const App: FC = () => (
  <Provider store={store}>
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);

export default App;
