import React from "react";
import banner from "../../../../assets/banner.jpg";
// import "../Banner/Banner.style.css";

const UserBanner = () => {
	return (
		<div>
			<div className="container-banner">
				<div
					className="banner-background"
					style={{
						backgroundImage: `url(${banner})`,
						backgroundSize: "cover",
						// width: "100vw",
						height: "93vh",
					}}>
					<div
						className="d-flex justify-content-end align-items-center"
						// style={{ marginRight: "-700px", padding: "0px" }}
					>
						<div
							className="me-5"
							style={{ textAlign: "center", marginTop: "200px" }}
							id="banner-text">
							<h1 className="fs-1 lh-lg ">Selamat datang di AstanaKu</h1>
							<p className="fw-light">
								AstanaKu merupakan website resmi Taman Pemakaman Astana <br />
								Kami menyediakan tempat peristirahatan terakhir dengan konsep taman
								<br />
								Ada 3 tipe dengan bermacam fasilitas yang tersedia <br />
							</p>
							<a href="#">
								<button className="btn btn-info" style={{ color: "white" }}>
									Lihat Tipe Pemakaman
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserBanner;
