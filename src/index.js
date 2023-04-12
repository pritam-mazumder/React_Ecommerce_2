import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Route } from "react-router-dom";

import App from "./App";
import { initialState } from "./context/initialState";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";

ReactDOM.render(
  <Route>
    <StateProvider initialState={initialState} reduser={reducer}>
      <App />
    </StateProvider>
  </Route>,
  document.getElementById("root")
);