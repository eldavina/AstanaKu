import React from "react";
import { UserDetailTipe } from "../../../component/molecules/User/UserDetailTipe/UserDetailTipe.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

export const UserDetailTipePage = () => {
	return (
		<div
			className=" min-vh-100"
			style={{
				background: "rgb(23,162,184)",
				background:
					"linear-gradient(45deg, rgba(23,162,184,1) 0%, rgba(232,243,255,1) 44%)",
			}}>
			<UserNavbar />
			<UserDetailTipe />
		</div>
	);
};
