import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Contact.css";
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
	const [userData, setUserData] = useState("");
	const history = useHistory();

	const [msg, setMsg] = useState({
		message: "",
	});

	const userContactPage = async () => {
		try {
			const res = await axios.get("/getdata");

			const data = await res.data.userProfile;
			console.log(data);
			setUserData(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		userContactPage();
	}, []);

	// storing data in states
	const handleInputs = (e) => {
		const { name, value } = e.target;

		setMsg({
			...msg,
			[name]: value,
		});
	};

	// send data to backend
	const submitConatctForm = async (e) => {
		e.preventDefault();

		const { message } = msg;

		if (!message) {
			return toast.warning("All fields are mandatory!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
		try {
			const res = await axios.post("/contact", msg);

			const data = await res.data;

			if (!data) {
				return toast.warning("message not send", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			} else {
				history.push("/");

				return toast.success("Message Send !", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			}
		} catch (error) {
			return toast.error(error.response.data.message, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	return (
		<>
			<section className="ftco-section py-2">
				<div className="container ">
					<div className="row justify-content-center">
						<div className="col-md-6 text-center pt-4">
							<h2 className="heading-section">Contact Form </h2>
						</div>
					</div>
					<div className="row justify-content-center shadow-lg p-4 my-5 bg-white ">
						<div className="col-md-12">
							<div className="wrapper">
								<div className="row no-gutters">
									<div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
										<div className="contact-wrap w-100 p-md-5 p-4">
											<h3 className="mb-4">Get in touch</h3>
											<div id="form-message-warning" className="mb-4"></div>
											<div id="form-message-success" className="mb-4">
												Your message was sent, thank you!
											</div>
											<form
												onSubmit={submitConatctForm}
												id="contactForm"
												name="contactForm"
												className="contactForm"
												novalidate="novalidate"
											>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group">
															<label className="label" for="name">
																Full Name
															</label>
															<input
																type="text"
																className="form-control"
																name="name"
																id="name"
																placeholder="Name"
																onChange={handleInputs}
																value={userData.name}
															/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label className="label" for="email">
																Email Address
															</label>
															<input
																type="email"
																className="form-control"
																name="email"
																id="email"
																placeholder="Email"
																onChange={handleInputs}
																value={userData.email}
															/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<label className="label" for="subject">
																Phone Number
															</label>
															<input
																type="tel"
																minLength="10"
																maxLength="10"
																className="form-control"
																name="phone"
																placeholder="Phone"
																onChange={handleInputs}
																value={userData.phone}
															/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<label className="label" for="#">
																Message
															</label>
															<textarea
																name="message"
																className="form-control"
																id="message"
																cols="30"
																rows="4"
																placeholder="Message"
																onChange={handleInputs}
															></textarea>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<button
																type="submit"
																className="btn btn-message btn-md text-white"
															>
																Send Message
															</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div
										className="col-lg-4 col-md-5 d-flex align-items-stretch"
										style={{ backgroundColor: "#ff9f43" }}
									>
										<div className="info-wrap text-white  w-100 p-md-5 p-5">
											<h3>Let's get in touch</h3>
											<p className="mb-4">
												We're open for any suggestion or just to have Navbar
											</p>
											<div className="dbox w-100 d-flex align-items-start pt-3">
												<div className="icon d-flex align-items-center justify-content-center">
													<span className="fa fa-map-marker"></span>
												</div>
												<div className="text pl-3">
													<p>
														<span>Address:</span> 198 West 21th Street, Suite
														721 New York NY 10016
													</p>
												</div>
											</div>
											<div className="dbox w-100 d-flex align-items-center ">
												<div className="icon d-flex align-items-center justify-content-center">
													<span className="fa fa-phone"></span>
												</div>
												<div className="text pl-3 pt-3 ">
													<p>
														<span>Phone:</span>
														<NavLink to="tel://1234567920">
															+ 1235 2355 98
														</NavLink>
													</p>
												</div>
											</div>
											<div className="dbox w-100 d-flex align-items-center">
												<div className="icon d-flex align-items-center justify-content-center">
													<span className="fa fa-paper-plane"></span>
												</div>
												<div className="text pl-3 pt-3">
													<p>
														<span>Email:</span>
														<NavLink to="mailto:info@yoursite.com">
															info@yoursite.com
														</NavLink>
													</p>
												</div>
											</div>
											<div className="dbox w-100 d-flex align-items-center">
												<div className="icon d-flex align-items-center justify-content-center">
													<span className="fa fa-globe"></span>
												</div>
												<div className="text pl-3 pt-3">
													<p>
														<span>Website</span>{" "}
														<NavLink to="#">yoursite.com</NavLink>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
