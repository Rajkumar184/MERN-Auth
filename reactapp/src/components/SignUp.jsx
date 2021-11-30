import React, { useState } from "react";
import "./SignUp.css";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
	const history = useHistory();
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		work: "",
		password: "",
		cpassword: "",
	});

	let name, value;

	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	const PostData = async (e) => {
		e.preventDefault();
		const { name, email, phone, work, password, cpassword } = user;

		if (!name || !email || !phone || !work || !password || !cpassword) {
			return alert("please fill the data!");
		}

		if (password !== cpassword) {
			return alert("password and confirm password are not matching");
		}

		try {
			const res = await fetch("/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					phone,
					work,
					password,
					cpassword,
				}),
			});

			const data = res.json();

			console.log(data);

			// if (data) {
			// 	history.push("/login");
			// 	alert("register Successfully!");
			// } else {
			// 	return alert("something went wrong server error");
			// }
		} catch (err) {
			console.log("reg f err" + err);
		}
	};

	return (
		<>
			<section className="vh-100 py-1">
				<div className="container h-custom">
					<div className="row d-flex justify-content-center align-items-center  h-100 shadow-lg p-6  bg-white my-4">
						<div className="col-md-9 col-lg-6 col-xl-5 signup-logo">
							<img
								src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
								className="img-fluid"
								alt="Sample_image"
							/>
						</div>
						<div className="col-md-7 col-lg-4 col-xl-5 offset-xl-1 pb-4">
							<form
								className="register-form"
								id="register-form"
								method="POST"
								autoComplete="off"
								onSubmit={PostData}
							>
								<h2 className="text-center">Sign Up</h2>
								<p className="text-center">
									Please fill in this form to create an account!
								</p>

								<hr />
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<span className="fa fa-user"></span>
											</span>
										</div>
										<input
											type="text"
											className="form-control"
											name="name"
											placeholder="Username"
											required="required"
											onChange={handleInputs}
											value={user.name}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-paper-plane"></i>
											</span>
										</div>
										<input
											type="email"
											className="form-control"
											name="email"
											placeholder="Email Address"
											required="required"
											onChange={handleInputs}
											value={user.email}
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i class="fas fa-phone"></i>
											</span>
										</div>
										<input
											type="tel"
											minLength="10"
											maxLength="10"
											className="form-control"
											name="phone"
											placeholder="Phone"
											pattern="[7-9]{1}[0-9]{9}"
											title="Phone number with 7-9 and remaing 9 digit with 0-9"
											required="required"
											onChange={handleInputs}
											value={user.phone}
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i class="fas fa-user-tie"></i>
											</span>
										</div>
										<input
											type="text"
											className="form-control"
											name="work"
											placeholder="Profession"
											required="required"
											onChange={handleInputs}
											value={user.work}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-lock"></i>
											</span>
										</div>
										<input
											type="password"
											className="form-control"
											name="password"
											placeholder="Password"
											required="required"
											onChange={handleInputs}
											value={user.password}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-check"></i>
											</span>
										</div>
										<input
											type="password"
											className="form-control"
											name="cpassword"
											placeholder="Confirm Password"
											required="required"
											onChange={handleInputs}
											value={user.cpassword}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="form-check-label">
										<input type="checkbox" required="required" /> I accept the{" "}
										<a href="#*">Terms of Use</a> &amp;
										<a href="#*">Privacy Policy</a>
									</label>
								</div>
								<div className="form-group text-center">
									<button
										type="submit"
										className="btn btn-primary btn-lg"
										value="register"
									>
										Sign Up
									</button>
								</div>
							</form>
							<div className="text-center pb-2">
								Already have an account?
								<NavLink className="text-success" to="/login">
									Login here
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SignUp;
