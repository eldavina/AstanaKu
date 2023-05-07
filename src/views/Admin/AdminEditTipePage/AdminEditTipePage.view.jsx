import React from "react";
import { AdminEditTipe } from "../../../component/molecules/Admin/AdminEditTipe/AdminEditTipe.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";

export const AdminEditTipePage = () => {
	return (
		<div>
			<AdminNavbar />
			<AdminEditTipe />
		</div>
	);
};
