
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AuthReducer from "./Store/Reducers";
import App from "./App";
const rootElement = document.getElementById("root");
const store = createStore(AuthReducer);
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
