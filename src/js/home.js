import React from "react";

// import PropTypes from "prop-types";

import { Counter } from "./component/Counter.js";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export const Counter = props => {
	let placeholder = "000000";
	// let output = placeholder + props.seconds;

	let seconds = props.seconds.toString();
	let icon = <i className="far fa-clock"></i>;

	let output = (
		placeholder
			.split("")
			.slice(seconds.length)
			.join("") + seconds
	).split("");
	output.unshift(icon);

	let result = output.map((element, index) => {
		return (
			<div className="box" key={index}>
				{element}
			</div>
		);
	});
	console.log(output);

	return <div>{result}</div>;
};

// export const Home = () => {
// 	let count = 0;

// 	let four = Math.floor(count / 10000);
// 	let three = Math.floor(count / 1000);
// 	let two = Math.floor(count / 100);
// 	let one = Math.floor(count / 10);

// 	count++;

// 	console.log(count);

// 	return <div>{count}</div>;
// };
