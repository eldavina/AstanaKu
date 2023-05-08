import React from "react";
import { AdminLogin } from "../../../component/molecules/Admin/AdminLogin/AdminLogin.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

export const AdminLoginPage = () => {
	return (
		<div>
			<UserNavbar />
			<AdminLogin />
		</div>
	);
};
