import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import Routes from "./Routes";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

const stateData = {
  tes: "Tes data Global With Redux",
};

// reducer
const reducerData = (state = stateData) => {
  return state;
};

const store = createStore(reducerData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
