import React from "react";
import { UserContactUs } from "../../../component/molecules/User/UserContactUs/UserContactUs.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

export const UserContactUsPage = () => {
	return (
		<div>
			<UserNavbar />
			<UserContactUs />
		</div>
	);
};
