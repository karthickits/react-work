import React from "react";
import ReactDOM from "react-dom";
import FormView from "./view/Form";
import DisplayContainer from "./container/DisplayContainer";
import UserDetailsReducer from "./reducer/UserDetailsReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rgitStore = createStore(UserDetailsReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={rgitStore}>
    <div>
      <FormView />
      <DisplayContainer />
    </div>
  </Provider>,
  document.getElementById("app")
);
