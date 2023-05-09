import { useMutation, useSubscription } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { AdminAddTipe } from "../../../component/molecules/Admin/AdminAddTipe/AdminAddTipe.molecules";
import { AdminTipe } from "../../../component/molecules/Admin/AdminTipe/AdminTipe.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";
import {
	deleteTipesByIdMutation,
	getTipesQuery,
} from "../../../config/Apollo/lists";

export const AdminTipePage = () => {
	// const { data: tipes } = useSubscription(getTipesQuery);

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
	const [showAdd, isShowAdd] = useState(true);
	const [showTipe, isShowTipe] = useState(false);

	const handleShowAdd = () => {
		isShowTipe(false);
		isShowAdd(true);
	};
	const handleShowTipe = () => {
		isShowAdd(false);
		isShowTipe(true);
	};

	return (
		<div
			className=" min-vh-100"
			style={{
				background: "rgb(23,162,184)",
				background:
					"linear-gradient(45deg, rgba(23,162,184,1) 0%, rgba(232,243,255,1) 44%)",
			}}>
			<AdminNavbar />
			<div
			// style={{ background: "#e2e2e2" }}
			>
				<div className="row m-0 px-10">
					<div className="col-md-3 min-h-screen p-3">
						<div className="p-2 rounded d-flex flex-column gap-2">
							<button
								type="button"
								class="btn bg-white shadow fs-5"
								onClick={handleShowAdd}>
								Tambah Tipe
							</button>
							<button
								type="button"
								class="btn bg-white shadow fs-5"
								onClick={handleShowTipe}>
								List Tipe
							</button>
						</div>
					</div>
					<div className="col-md-9">
						<div className="p-3">
							{showAdd && <AdminAddTipe />}
							{showTipe && (
								<AdminTipe
									//  tipes={tipes}
									handleDeleteTipe={handleDeleteTipe}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
