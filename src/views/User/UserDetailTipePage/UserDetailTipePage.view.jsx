import React from "react";
import { UserDetailTipe } from "../../../component/molecules/User/UserDetailTipe/UserDetailTipe.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

export const UserDetailTipePage = () => {
	return (
		<div>
			<UserNavbar />
			<UserDetailTipe />
		</div>
	);
};
