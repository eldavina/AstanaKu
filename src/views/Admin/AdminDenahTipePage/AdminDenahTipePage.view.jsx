import React from "react";
import AdminCardList from "../../../component/molecules/Admin/AdminCardList/AdminCardList.molecules";
import { AdminDenahTipe } from "../../../component/molecules/Admin/AdminDenahTipe/AdminDenahTipe.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";

export const AdminDenahTipePage = () => {
	return (
		<div>
			<AdminNavbar />
			<AdminDenahTipe />
			<AdminCardList />
		</div>
	);
};
