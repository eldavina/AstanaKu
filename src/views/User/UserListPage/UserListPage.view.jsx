import { useSubscription } from "@apollo/client";
import React from "react";
import UserList from "../../../component/molecules/User/UserList/UserList.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";
import { getListsQuery } from "../../../config/Apollo/lists";

export const UserListPage = () => {
	// const { data: lists } = useSubscription(getListsQuery);

	return (
		<div
			className=" min-vh-100"
			style={{
				background: "rgb(23,162,184)",
				background:
					"linear-gradient(45deg, rgba(23,162,184,1) 0%, rgba(232,243,255,1) 44%)",
			}}>
			<UserNavbar />
			<UserList
			// lists={lists}
			/>
		</div>
	);
};
