import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

const Navbar = () => {
	const cookies = new Cookies();

	return (
		<>
			<nav
				className="navbar navbar-expand-md  navbar-dark sticky-top"
				style={{ backgroundColor: "#1abc9c" }}
			>
				<NavLink className="navbar-brand" to="/">
					MERNSTACK
				</NavLink>
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navb"
					aria-expanded="true"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navb" className="navbar-collapse collapse hide">
					<ul className="navbar-nav ml-auto ">
						<li className="nav-item active">
							<NavLink className="nav-link text-white" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link text-white" to="/about">
								AboutUs
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link text-white" to="/contact">
								Contact
							</NavLink>
						</li>
					</ul>

					<ul className="nav navbar-nav ml-auto">
						<div>
							{cookies.get("isLogin") ? (
								""
							) : (
								<li className="nav-item">
									<NavLink className="nav-link text-dark" to="/signup">
										<span className="fas fa-user "></span> Sign Up
									</NavLink>
								</li>
							)}
						</div>

						{/* login logout toggle */}
						{cookies.get("isLogin") ? (
							<li className="nav-item">
								<NavLink className="nav-link text-danger" to="/logout">
									<span className="fas fa-sign-in-alt "></span> Logout
								</NavLink>
							</li>
						) : (
							<li className="nav-item">
								<NavLink className="nav-link text-dark" to="/login">
									<span className="fas fa-sign-in-alt "></span> Login
								</NavLink>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
