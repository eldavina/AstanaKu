import React from "react";
import { AdminDetailTipe } from "../../../component/molecules/Admin/AdminDetailTipe/AdminDetailTipe.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";

export const AdminDetailTipePage = () => {
	return (
		<div
			className=" min-vh-100"
			style={{
				background: "rgb(23,162,184)",
				background:
					"linear-gradient(45deg, rgba(23,162,184,1) 0%, rgba(232,243,255,1) 44%)",
			}}>
			<AdminNavbar />
			<AdminDetailTipe />
		</div>
	);
};
