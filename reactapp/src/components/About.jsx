import React, { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";
import { NavLink, useHistory } from "react-router-dom";

const About = () => {
	const [userData, setUserData] = useState();
	const history = useHistory();

	const openAboutPage = async () => {
		try {
			const res = await axios.get("/about");

			const data = await res.data;
			console.log(data);
			setUserData(data);

			if (!data) {
				alert("there is no data availble plzz login");
			}
		} catch (err) {
			alert("Login to access profile page");
			history.push("/login");
		}
	};

	useEffect(() => {
		openAboutPage();
	}, []);

	return (
		<>
			<section className="overall-about py-4 ">
				<div class="container emp-profile shadow-lg p-4 mb-4 bg-white">
					<form method="GET">
						<div class="row ">
							<div class="col-md-4">
								<div
									class="profile-img"
									style={{ height: "12rem", width: "16rem" }}
								>
									<img className="rounded" src="images/RAJKUMAR.jpg" alt="" />
									<div class="file btn btn-lg btn-primary">
										Change Photo
										<input type="file" name="file" />
									</div>
								</div>
							</div>
							<div class="col-md-6 pt-2">
								<div class="profile-head">
									<h5>{userData?.userProfile.name}</h5>
									<h6>{userData?.userProfile.work}</h6>
									<p class="proile-rating">
										RANKINGS : <span>8/10</span>
									</p>
									<ul class="nav nav-tabs" id="myTab" role="tablist">
										<li class="nav-item">
											<NavLink
												class="nav-link active"
												id="home-tab"
												data-toggle="tab"
												to="#home"
												role="tab"
												aria-controls="home"
												aria-selected="true"
											>
												About
											</NavLink>
										</li>
										<li class="nav-item">
											<NavLink
												class="nav-link"
												id="profile-tab"
												data-toggle="tab"
												to="#profile"
												role="tab"
												aria-controls="profile"
												aria-selected="true"
											>
												Timeline
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-md-2">
								<input
									type="submit"
									class="profile-edit-btn"
									name="btnAddMore"
									value="Edit Profile"
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<div class="profile-work">
									<p>WORK LINK</p>
									<NavLink to="">Website Link</NavLink>
									<br />
									<NavLink to="">Website Profile</NavLink>
									<br />
									<NavLink to="">Website Work</NavLink>
									<p>SKILLS</p>
									<NavLink to="">Web Designer</NavLink>
									<br />
									<NavLink to="">Web Developer</NavLink>
									<br />
									<NavLink to="">Mern Developer</NavLink>
									<br />
									<NavLink to="">Nodes, Express js</NavLink>
									<br />
									<NavLink to="">Mongo Db</NavLink>
									<br />
								</div>
							</div>
							<div class="col-md-8">
								<div class="tab-content profile-tab" id="myTabContent">
									<div
										class="tab-pane fade show active"
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab"
									>
										<div class="row">
											<div class="col-md-6">
												<label>User Id</label>
											</div>
											<div class="col-md-6">
												<p>{userData?.userProfile.email}</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label>Name</label>
											</div>
											<div class="col-md-6">
												<p>{userData?.userProfile.name}</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label>Email</label>
											</div>
											<div class="col-md-6">
												<p>{userData?.userProfile.email}</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label>Phone</label>
											</div>
											<div class="col-md-6">
												<p> {userData?.userProfile.phone}</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label>Profession</label>
											</div>
											<div class="col-md-6">
												<p>{userData?.userProfile.work}</p>
											</div>
										</div>
									</div>
									<div
										class="tab-pane fade"
										id="profile"
										role="tabpanel"
										aria-labelledby="profile-tab"
									>
										<div class="row">
											<div class="col-md-6">
												<label>Experience</label>
											</div>
											<div class="col-md-6">
												<p>Expert</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label>Hourly Rate</label>
											</div>
											<div class="col-md-6">
												<p>10$/hr</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label>Total Projects</label>
											</div>
											<div class="col-md-6">
												<p>230</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label>English Level</label>
											</div>
											<div class="col-md-6">
												<p>Expert</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<label>Availability</label>
											</div>
											<div class="col-md-6">
												<p>6 months</p>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<label>Your Bio</label>
												<br />
												<p>Your detail description</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default About;
