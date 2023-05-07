import React from "react";
import { UserDenahTipe } from "../../../component/molecules/User/UserDenahTipe/UserDenahTipe.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

export const UserDenahTipePage = () => {
	return (
		<div>
			<UserNavbar />
			<UserDenahTipe />
		</div>
	);
};
