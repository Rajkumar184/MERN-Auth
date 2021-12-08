import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import SignUp from "./components/SignUp.jsx";
import Footer from "./components/Footer.jsx";
import SendEmail from "./components/SendEmail.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import ErrorPage from "./components/ErrorPage";

const App = () => {
	return (
		<>
			<Navbar />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>

				<Route exact path="/login">
					<Login />
				</Route>

				<Route exact path="/logout">
					<Logout />
				</Route>

				<Route exact path="/signup">
					<SignUp />
				</Route>

				<Route exact path="/sendotp">
					<SendEmail />
				</Route>

				<Route exact path="/changepassword">
					<ChangePassword />
				</Route>
				<Route>
					<ErrorPage />
				</Route>
			</Switch>
			<Footer />
		</>
	);
};

export default App;

//rajkumar mali sir big fan
