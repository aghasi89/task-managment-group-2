import React from 'react';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './App';
import "./index.css"
import reducer from './store/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
 <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);



