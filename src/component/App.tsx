import { Provider } from "react-redux";
import { store } from "../context";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const App: React.FC = () => (
  <Provider store={store}>
    <div
      className="
        text-custom-black-600
        bg-custom-gray-50
        dark:bg-custom-gray-800
        flex
        flex-col"
    >
      <Header />
      <Main />
      <Footer />
    </div>
  </Provider>
);

export default App;
