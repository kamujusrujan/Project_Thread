import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./components/utils/Redux/store";
import { Provider } from "react-redux";
ReactDOM.render(<App />, document.getElementById("root"));
