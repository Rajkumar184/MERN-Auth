import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<>
			<section className="login-section py-2">
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center shadow-lg p-4 my-5 bg-white  mb-6">
						<div className="col-md-6 signin-logo">
							<img
								src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
								className="img-fluid"
								alt="Phone_image"
							/>
						</div>
						<div className="col-md-7 col-lg-5 col-xl-5">
							<div className="signin-form">
								<form action="/examples/actions" method="post">
									<h2>Login in</h2>
									<p className="hint-text">
										Sign in with your social media account
									</p>
									<div className="social-btn text-center">
										<NavLink
											to="/"
											className="btn btn-primary btn-lg"
											title="Facebook"
										>
											<i class="fab fa-facebook-square"></i>
										</NavLink>
										<NavLink
											to="/"
											className="btn btn-info btn-lg"
											title="Twitter"
										>
											<i class="fab fa-twitter"></i>
										</NavLink>
										<NavLink
											to="/"
											className="btn btn-danger btn-lg"
											title="Google"
										>
											<i class="fab fa-google"></i>
										</NavLink>
									</div>
									<div className="or-seperator">
										<b>or</b>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control input-lg"
											name="username"
											placeholder="Username"
											required="required"
										/>
									</div>
									<div className="form-group">
										<input
											type="password"
											className="form-control input-lg"
											name="password"
											placeholder="Password"
											required="required"
										/>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="btn btn-success btn-lg btn-block signin-btn"
										>
											Sign in
										</button>
									</div>
									<div className="text-center small">
										<NavLink to="/">Forgot Your password?</NavLink>
									</div>
								</form>
								<div className="text-center small">
									Don't have an account? <NavLink to="/signup">Sign up</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
