import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./container/FormContainer";
import DisplayContainer from "./container/DisplayContainer";
import UserDetailsReducer from "./reducer/UserDetailsReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Main from "./view/Main";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const rgitStore = createStore(
  UserDetailsReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={rgitStore}>
    <div>
      <FormContainer />
      <DisplayContainer />
    </div>
  </Provider>,
  document.getElementById("app")
);

ReactDOM.render(
  <Provider store={rgitStore}>
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById("app2")
);
