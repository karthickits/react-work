import React from "react";
import Form from "./Form";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./reducer/CounterReducer";
import Display from "./Display";
import DisplayContainer from "./container/DisplayContainer";
import FormContainer from "./container/FormContainer";
import { composeWithDevTools } from "redux-devtools-extension";

const spaStore = createStore(CounterReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={spaStore}>
    <div>
      <Form />
      <Display />
      <br />
      <br />
      <FormContainer />
      <DisplayContainer />
    </div>
  </Provider>,
  document.getElementById("myDiv")
);
