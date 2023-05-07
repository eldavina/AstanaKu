import React from "react";
import login from "../../../../assets/login.jpg";

export const UserLogin = () => {
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${login})`,
					backgroundSize: "cover",
					width: "100vw",
					height: "100vh",
				}}>
				<section className="vh-100 position-relative">
					{/* <img src={login} className="w-100" /> */}
					<div className="container py-5 h-100">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col-12 col-md-8 col-lg-6 col-xl-5">
								<div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
									<div className="card-body p-5 text-center">
										<h3 className="mb-5 text-info">Login</h3>
										<form>
											<div className="form-outline mb-4">
												<input
													type="text"
													id="username"
													className="form-control form-control-lg"
													placeholder="Username"
													name="username"
													required=""
													// value={formik.values.username}
													// onChange={formik.handleChange}
												/>
											</div>
											<div className="form-outline mb-4">
												<input
													type="password"
													id="password"
													className="form-control form-control-lg"
													placeholder="Password"
													name="password"
													required=""
													// value={formik.values.password}
													// onChange={formik.handleChange}
												/>
											</div>

											<button
												className="btn btn-info btn-lg btn-block text-white"
												type="submit"
												// onClick={formik.handleSubmit}
											>
												Login
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
