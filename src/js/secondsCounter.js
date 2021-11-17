// import React from "react";

// // import PropTypes from "prop-types";

// import { Counter } from "./component/Counter.js";

// //include images into your bundle
// // import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component

// export const Counter = props => {
// 	let placeholder = "000000";
// 	// let output = placeholder + props.seconds;

// 	let seconds = props.seconds.toString();
// 	let icon = <i className="far fa-clock"></i>;

// 	let output = (
// 		placeholder
// 			.split("")
// 			.slice(seconds.length)
// 			.join("") + seconds
// 	).split("");
// 	output.unshift(icon);

// 	let result = output.map((element, index) => {
// 		return (
// 			<div className="box" key={index}>
// 				{element}
// 			</div>
// 		);
// 	});
// 	console.log(output);

// 	return <div>{result}</div>;
// };

// // export const Home = () => {
// // 	let count = 0;

// // 	let four = Math.floor(count / 10000);
// // 	let three = Math.floor(count / 1000);
// // 	let two = Math.floor(count / 100);
// // 	let one = Math.floor(count / 10);

// // 	count++;

// // 	console.log(count);

// // 	return <div>{count}</div>;
// // };

// import React from "react";
// import PropTypes from "prop-types";

// export const SecondsCounter = props => {
// 	// Create a place holder with max number of digits in counter
// 	let placeholder = "000000";

// 	// Converting the passed property of seconds from number to string
// 	let seconds = props.seconds.toString();

// 	let output = (
// 		placeholder
// 			.split("")
// 			.slice(seconds.length)
// 			.join("") + seconds
// 	).split("");

// 	// Creates each div for
// 	let result = output.map((element, index) => {
// 		return (
// 			<div className="box" key={index}>
// 				{element}
// 			</div>
// 		);
// 	});

// 	return (
// 		<div className="container">
// 			<div className="box">
// 				<i className="far fa-clock"></i>
// 			</div>
// 			{result}
// 		</div>
// 	);
// };

// SecondsCounter.propTypes = {
// 	seconds: PropTypes.number
// };

import React from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";

export function SecondsCounter(props) {
	let digits = props.seconds.toString().padStart(6, 0);

	return (
		<div>
			<div className="container d-flex">
				<div className="box">
					<i className="far fa-clock pr-3"></i>
				</div>
				<div className="digits">
					{digits.split(" ").map((index, item) => {
						return (
							<div className="digit" key={item}>
								{index}
							</div>
						);
					})}
				</div>
			</div>
			<div className="buttons pt-4">
				<button onClick={props.stopButton}>Stop</button>
				<button onClick={props.resetButton}>Reset</button>
			</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	seconds: PropTypes.number,
	stopButton: PropTypes.func,
	resetButton: PropTypes.func
};
