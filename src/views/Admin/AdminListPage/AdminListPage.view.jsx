import { useMutation, useSubscription } from "@apollo/client";
import React from "react";
import { AdminAddList } from "../../../component/molecules/Admin/AdminAddList/AdminAddList.molecules";
import AdminList from "../../../component/molecules/Admin/AdminList/AdminList.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";
import {
	deleteListsByIdMutation,
	getListsQuery,
} from "../../../config/Apollo/lists";

export const AdminListPage = () => {
	const { data: lists } = useSubscription(getListsQuery);

	const [deleteLists, { loading: loadingdelete, error }] = useMutation(
		deleteListsByIdMutation
	);
	const handleDeleteList = (id) => {
		if (window.confirm("Do you want to delete this data?")) {
			deleteLists({
				variables: {
					id,
				},
			});
		}
	};

	return (
		<div>
			<AdminNavbar />
			<AdminAddList />
			<AdminList lists={lists} handleDeleteList={handleDeleteList} />
		</div>
	);
};
