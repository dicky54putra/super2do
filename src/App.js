import Home from "src/components/organisms/Home";
import "./styles/app.css";
import "./styles/base.css";
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./context/store";

function App() {
  return (
    <Provider store={store}>
      <Home />;
    </Provider>
  );
}

export default App;
