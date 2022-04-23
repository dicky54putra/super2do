import Home from "src/components/organisms/Home";
import "./styles/app.css";
import "./styles/base.css";
import "./styles/index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./context/store";
import publicRoutes from "./routes/publicRoutes";
import { BASE_URL } from "./apis/constantApis";
import axios from "axios";

function App() {
  axios.defaults.baseURL = BASE_URL;
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
