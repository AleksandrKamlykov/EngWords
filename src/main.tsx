import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './reducers/reducers';

import thunk from "redux-thunk";
import App from './App';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />

      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
