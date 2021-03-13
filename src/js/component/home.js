import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="clock-container">
			<div className="clock-col">
				<p className="icons">
					<i className="far fa-clock"></i>
				</p>
			</div>
			<div className="clock-col">
				<p
					className="clock-seconds clock-timer"
					style={printDigits(props.dig[4])}></p>
			</div>
			<div className="clock-col">
				<p
					className="clock-seconds clock-timer"
					style={printDigits(props.dig[3])}></p>
			</div>
			<div className="clock-col">
				<p
					className="clock-seconds clock-timer"
					style={printDigits(props.dig[2])}></p>
			</div>
			<div className="clock-col">
				<p
					className="clock-seconds clock-timer"
					style={printDigits(props.dig[1])}></p>
			</div>
			<div className="clock-col">
				<p
					className="clock-seconds clock-timer"
					style={printDigits(props.dig[0])}></p>
			</div>
		</div>
	);
}

const printDigits = digits => {
	const secs = { "--timer-seconds": `'${digits}'` };
	return secs;
};

Home.propTypes = {
	dig: PropTypes.array
};
