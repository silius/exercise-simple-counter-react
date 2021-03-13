//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let counter = 0;
let times = [0, 0, 0, 0, 0];
setInterval(function() {
	times = [
		Math.floor(counter / 1),
		Math.floor(counter / 10),
		Math.floor(counter / 100),
		Math.floor(counter / 1000),
		Math.floor(counter / 10000)
	];
	ReactDOM.render(<Home dig={times} />, document.querySelector("#app"));
	counter++;
}, 1000);
