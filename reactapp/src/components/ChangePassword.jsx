import React from "react";

const ChangePassword = () => {
	return (
		<>
			<section className="login-section py-2">
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center shadow-lg p-4 my-5 bg-white  mb-6">
						<div className="col-md-6 signin-logo">
							<img
								src="images/Password.png"
								className="img-fluid"
								alt="change_password"
							/>
						</div>
						<div className="col-md-7 col-lg-5 col-xl-5">
							<span className="anchor" id="formChangePassword"></span>

							<div className="card card-outline-secondary">
								<div className="card-header">
									<h3 className="mb-0">Change Password</h3>
								</div>
								<div className="card-body">
									<form className="form" role="form" autocomplete="off">
										<div className="form-group">
											<label for="inputPasswordOld">Current Password</label>
											<input
												type="password"
												className="form-control"
												id="inputPasswordOld"
												required=""
											/>
										</div>
										<div className="form-group">
											<label for="inputPasswordNew">New Password</label>
											<input
												type="password"
												className="form-control"
												id="inputPasswordNew"
												required=""
											/>
											<span className="form-text small text-muted">
												The password must be 8-20 characters, and must
												<em>not</em> contain spaces.
											</span>
										</div>
										<div className="form-group">
											<label for="inputPasswordNewVerify">Verify</label>
											<input
												type="password"
												className="form-control"
												id="inputPasswordNewVerify"
												required=""
											/>
											<span className="form-text small text-muted">
												To confirm, type the new password again.
											</span>
										</div>
										<div className="form-group">
											<button
												type="submit"
												className="btn btn-success btn-lg float-right"
											>
												Save
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ChangePassword;
