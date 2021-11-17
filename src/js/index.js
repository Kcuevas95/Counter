// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom";

// //include bootstrap npm library into the bundle
// import "bootstrap";

// //include your index.scss file into the bundle
// import "../styles/index.scss";

// //importing component
// import { Counter } from "./component/Counter.js";

// let secs = 1;

// const interval = setInterval(() => {
// 	if (secs == 999999) {
// 		clearInterval(interval);
// 	}
// 	ReactDOM.render(<Counter seconds={secs} />, document.querySelector("#app"));
// 	secs++;
// }, 1000);

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "../js/secondsCounter";

//render your react application using set interval

// Initializing the counter

let startingTime = Date.now();

let counter = setInterval(() => {
	let currentTime = Date.now();
	let seconds = Math.floor((currentTime - startingTime) / 1000);

	ReactDOM.render(
		<SecondsCounter
			seconds={seconds}
			stopButton={myStopFunction}
			resetButton={myResetFunction}
		/>,
		document.querySelector("#app")
	);
}, 1000);

function myStopFunction() {
	return clearInterval(counter);
}

let zero = 0;

let myResetFunction = () => {};
