import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import * as calc from "./util/calculate";
import sayAwesome from "./util/greeter";
import Hello from "./util/hello";
import _now from "./util/datetimeutil";
import App from "./util/App";
import DynamicState from "./util/DynamicState";
import TableApp from "./TableApp";
import ComparatorForm from "./comparator/ComparatorForm";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

const greet = new Hello();
greet.sayHello();

//display the calculated values
console.log(calc.add(1, 2));
console.log(calc.PI);
console.log(sayAwesome());

ReactDOM.render(
  <div>
    <h1>Hello World! at {_now()}</h1>
    <App />
    <DynamicState />
    <TableApp />
    <ComparatorForm />
  </div>,
  document.getElementById("app2")
);
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("app")
);
