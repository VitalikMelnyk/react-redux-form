import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducers/rootReducer";
import { UserFormReducer } from "./store/UserForm/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
// need to add reducer
const devtools = composeWithDevTools();
const store = createStore(UserFormReducer, devtools);
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
