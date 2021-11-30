import React from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
const Contact = () => {
	return (
		<>
			<section class="ftco-section py-2">
				<div class="container ">
					<div class="row justify-content-center">
						<div class="col-md-6 text-center pt-4">
							<h2 class="heading-section">Contact Form </h2>
						</div>
					</div>
					<div class="row justify-content-center shadow-lg p-4 my-5 bg-white ">
						<div class="col-md-12">
							<div class="wrapper">
								<div class="row no-gutters">
									<div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
										<div class="contact-wrap w-100 p-md-5 p-4">
											<h3 class="mb-4">Get in touch</h3>
											<div id="form-message-warning" class="mb-4"></div>
											<div id="form-message-success" class="mb-4">
												Your message was sent, thank you!
											</div>
											<form
												method="POST"
												id="contactForm"
												name="contactForm"
												class="contactForm"
												novalidate="novalidate"
											>
												<div class="row">
													<div class="col-md-6">
														<div class="form-group">
															<label class="label" for="name">
																Full Name
															</label>
															<input
																type="text"
																class="form-control"
																name="name"
																id="name"
																placeholder="Name"
															/>
														</div>
													</div>
													<div class="col-md-6">
														<div class="form-group">
															<label class="label" for="email">
																Email Address
															</label>
															<input
																type="email"
																class="form-control"
																name="email"
																id="email"
																placeholder="Email"
															/>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<label class="label" for="subject">
																Subject
															</label>
															<input
																type="text"
																class="form-control"
																name="subject"
																id="subject"
																placeholder="Subject"
															/>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<label class="label" for="#">
																Message
															</label>
															<textarea
																name="message"
																class="form-control"
																id="message"
																cols="30"
																rows="4"
																placeholder="Message"
															></textarea>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<button
																type="button"
																class="btn btn-message btn-md text-white"
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
										class="col-lg-4 col-md-5 d-flex align-items-stretch"
										style={{ backgroundColor: "#ff9f43" }}
									>
										<div class="info-wrap text-white  w-100 p-md-5 p-5">
											<h3>Let's get in touch</h3>
											<p class="mb-4">
												We're open for any suggestion or just to have Navbar
											</p>
											<div class="dbox w-100 d-flex align-items-start pt-3">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-map-marker"></span>
												</div>
												<div class="text pl-3">
													<p>
														<span>Address:</span> 198 West 21th Street, Suite
														721 New York NY 10016
													</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center ">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-phone"></span>
												</div>
												<div class="text pl-3 pt-3 ">
													<p>
														<span>Phone:</span>
														<NavLink to="tel://1234567920">
															+ 1235 2355 98
														</NavLink>
													</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-paper-plane"></span>
												</div>
												<div class="text pl-3 pt-3">
													<p>
														<span>Email:</span>
														<NavLink to="mailto:info@yoursite.com">
															info@yoursite.com
														</NavLink>
													</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-globe"></span>
												</div>
												<div class="text pl-3 pt-3">
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
