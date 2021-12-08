import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
	const [userName, setUserName] = useState();
	const [show, setShow] = useState(false);

	const userHomePage = async () => {
		try {
			const res = await axios.get("/getdata", {
				method: "GET",
			});

			const data = await res.data;
			console.log(data);
			setUserName(data.userProfile.name);
			setShow(true);

			if (!data) {
				const error = new Error(res.error);
				throw error;
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		userHomePage();
	}, []);
	return (
		<>
			<section class="vh-100 ">
				<div class="container-fluid h-custom ">
					<div class="row d-flex justify-content-center align-items-center h-100  my-2 mx-5">
						<div class="col-md-9 col-lg-6 col-xl-5 ">
							<img
								src="images/web_dev.png"
								className="img-fluid"
								alt="Sample_image"
							/>
						</div>
						<div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
							<form>
								<form>
									<h1 className="text-danger ">Welcome</h1>
									<h1 className="mt-5">{userName}</h1>
									<h3 className="mt-4">
										{show ? "Happy,to see you back!" : "We Are MERN Developer"}
									</h3>
								</form>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* <------------------cards------------------------------> */}

			<div class="album py-2 ">
				<div class="container">
					<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="https://source.unsplash.com"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>

						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>

						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card shadow-sm">
								<svg
									class="bd-placeholder-img card-img-top"
									width="100%"
									height="225"
									xmlns="http://www.w3.org/2000/svg"
									role="img"
									aria-label="Placeholder: Thumbnail"
									preserveAspectRatio="xMidYMid slice"
									focusable="false"
								>
									<title>Placeholder</title>
									<rect width="100%" height="100%" fill="#55595c"></rect>
									<text x="50%" y="50%" fill="#eceeef" dy=".3em">
										Thumbnail
									</text>
								</svg>

								<div class="card-body">
									<p class="card-text">
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</p>
									<div class="d-flex justify-content-between align-items-center">
										<div class="btn-group">
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											<button
												type="button"
												class="btn btn-sm btn-outline-secondary"
											>
												Edit
											</button>
										</div>
										<small class="text-muted">9 mins</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
