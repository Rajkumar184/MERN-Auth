import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="container">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-5 border-top ">
					<div className="col-md-4 d-flex align-items-center">
						<NavLink
							to="/"
							className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
						></NavLink>
						<span className="text-muted">© 2021 Company, Inc</span>
					</div>

					<ul className="nav col-md-4 flex-wrap justify-content-end align-items-center list-unstyled d-flex">
						<li className="ms-3">
							<NavLink
								to="https://www.facebook.com/"
								className="btn btn-primary btn-md"
								title="Facebook"
								target="_blank"
							>
								<i className="fab fa-facebook-square"></i>
							</NavLink>
						</li>
						<li className="ms-3">
							<NavLink
								to="/"
								className="btn btn-info btn-md ml-3"
								title="Twitter"
							>
								<i className="fab fa-twitter"></i>
							</NavLink>
						</li>
						<li className="ms-3">
							<NavLink
								to="/"
								className="btn btn-danger btn-md ml-3"
								title="Google"
							>
								<i className="fab fa-google"></i>
							</NavLink>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
};

export default Footer;
