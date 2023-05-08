import React from "react";
import { AdminDetailTipe } from "../../../component/molecules/Admin/AdminDetailTipe/AdminDetailTipe.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";

export const AdminDetailTipePage = () => {
	return (
		<div>
			<AdminNavbar />
			<AdminDetailTipe />
		</div>
	);
};
