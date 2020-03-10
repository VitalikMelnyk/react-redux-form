import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// const devtools = composeWithDevTools();
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./store/UserForm/reducers";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
