import { useSubscription } from "@apollo/client";
import React from "react";
import UserList from "../../../component/molecules/User/UserList/UserList.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";
import { getListsQuery } from "../../../config/Apollo/lists";

export const UserListPage = () => {
	const { data: lists } = useSubscription(getListsQuery);

	return (
		<div>
			<UserNavbar />
			<UserList lists={lists} />
		</div>
	);
};
