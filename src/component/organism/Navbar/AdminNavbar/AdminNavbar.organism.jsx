import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";

const AdminNavbar = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-light shadow-sm p-0 mb-0 bg-white rounded ">
				<div className="container-fluid">
					<a className="navbar-brand">
						<img src={logo} width="60"></img>
						<a className="pt-2 text-dark">A s t a n a K u</a>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div id="nav-items-right">
						<a href="#" className="btn btn-info">
							<Link className="text-white" to="/-">
								Home
							</Link>
						</a>
						<a href="#" className="text-decoration-none text-info mx-3">
							<Link to="/denahtipe-" className="text-info">
								Denah&Tipe
							</Link>
						</a>
						<a href="#" className="text-decoration-none text-info mx-3">
							<Link to="/tipe-" className="text-info">
								Tambah Tipe
							</Link>
						</a>
						<a href="#" className="text-decoration-none text-info mx-3">
							<Link to="/list-" className="text-info">
								List
							</Link>
						</a>
						<a href="#" className="text-decoration-none text-info mx-3">
							<Link to="/contactus-" className="text-info">
								Contact Us
							</Link>
						</a>
						<a href="#" className="text-decoration-none text-info mx-3">
							<Link to="/login" className="text-info">
								Logout
							</Link>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default AdminNavbar;
