import React from "react";
import "./AdminLandingPage.style.css";
import AdminBanner from "../../../component/molecules/Admin/AdminBanner/AdminBanner.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";

const AdminLandingPage = () => {
	return (
		<div>
			{/* <title>Landing Page</title> */}
			<AdminNavbar />
			<AdminBanner />
		</div>
	);
};

export default AdminLandingPage;
