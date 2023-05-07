import React from "react";
import "./UserLandingPage.style.css";
import UserBanner from "../../../component/molecules/User/UserBanner/UserBanner.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

const UserLandingPage = () => {
	return (
		<div>
			{/* <title>Landing Page</title> */}
			<UserNavbar />
			<UserBanner />
		</div>
	);
};

export default UserLandingPage;
