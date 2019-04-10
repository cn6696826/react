import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Admin from "./admin";
import Routers from "./Router";
import Home1 from "./pages/routedemo/demo2/router";
import * as serviceWorker from "./serviceWorker";
import configStore from "./redux/store/index";
import { Provider } from "react-redux";
const store = configStore();
ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
