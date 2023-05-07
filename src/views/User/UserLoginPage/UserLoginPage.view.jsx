import React from "react";
import { UserLogin } from "../../../component/molecules/User/UserLogin/UserLogin.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

export const UserLoginPage = () => {
	return (
		<div>
			<UserNavbar />
			<UserLogin />
		</div>
	);
};
