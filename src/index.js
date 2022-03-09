import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
//import logger and applyMiddleware when you run local

import { rootReducer } from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';

//export const store = createStore(rootReducer, applyMiddleware(logger)); //development
export const store = createStore(rootReducer); //production

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
