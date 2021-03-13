import React from "react";

//create your first component
export function Home() {
	let zero = "'0'";
	const segundos = {
		"--timer-seconds": zero
	};
	return (
		<div className="clock-container">
			<div className="clock-col">
				<p className="icons">
					<i className="far fa-clock"></i>
				</p>
			</div>
			<div className="clock-col">
				<p className="clock-seconds clock-timer" style={segundos}></p>
			</div>
			<div className="clock-col">
				<p className="clock-seconds clock-timer" style={segundos}></p>
			</div>
			<div className="clock-col">
				<p className="clock-seconds clock-timer" style={segundos}></p>
			</div>
			<div className="clock-col">
				<p className="clock-seconds clock-timer" style={segundos}></p>
			</div>
			<div className="clock-col">
				<p className="clock-seconds clock-timer" style={segundos}></p>
			</div>
		</div>
	);
}
