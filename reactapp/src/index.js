import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />

			<ToastContainer
				className="foo"
				style={{ width: "400px", fontWeight: "bold" }}
			/>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
