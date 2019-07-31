import React from "react";
import ReactDOM from "react-dom";
import App from "./Main/App";
import * as ServiceWorker from "./Utils/ServiceWorker";

ReactDOM.render(<App />, document.getElementById("px-50"));

ServiceWorker.register();
