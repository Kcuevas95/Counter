//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//importing component
import { Counter } from "./component/Counter.js";

let secs = 1;

const interval = setInterval(() => {
	if (secs == 999999) {
		clearInterval(interval);
	}
	ReactDOM.render(<Counter seconds={secs} />, document.querySelector("#app"));
	secs++;
}, 1000);
