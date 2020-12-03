import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "semantic-ui-css/semantic.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const stateFilm = {
  activeItem: "beranda",
};

// reducer
const reducerFilm = (state = stateFilm, action) => {
  switch (action.type) {
    case "ACTIVE_ITEM":
      var stateActiveItem = { ...state, activeItem: action.activeItem };
      return stateActiveItem;
    default:
      return state;
  }
};

const store = createStore(reducerFilm);
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
