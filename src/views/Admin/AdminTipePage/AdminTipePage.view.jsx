import { useMutation, useSubscription } from "@apollo/client";
import React from "react";
import { AdminAddTipe } from "../../../component/molecules/Admin/AdminAddTipe/AdminAddTipe.molecules";
import { AdminTipe } from "../../../component/molecules/Admin/AdminTipe/AdminTipe.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";
import {
	deleteTipesByIdMutation,
	getTipesQuery,
} from "../../../config/Apollo/lists";

export const AdminTipePage = () => {
	const { data: tipes } = useSubscription(getTipesQuery);

	const [deleteTipes, { loading: loadingdelete, error }] = useMutation(
		deleteTipesByIdMutation
	);
	const handleDeleteTipe = (id) => {
		if (window.confirm("Do you want to delete this data?")) {
			deleteTipes({
				variables: {
					id,
				},
			});
		}
	};

	return (
		<div>
			<AdminNavbar />
			<AdminAddTipe />
			<AdminTipe tipes={tipes} handleDeleteTipe={handleDeleteTipe} />
		</div>
	);
};
