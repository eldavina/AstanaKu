import { useMutation, useSubscription } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { AdminAddList } from "../../../component/molecules/Admin/AdminAddList/AdminAddList.molecules";
import AdminList from "../../../component/molecules/Admin/AdminList/AdminList.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";
import {
	deleteListsByIdMutation,
	getListsQuery,
} from "../../../config/Apollo/lists";

export const AdminListPage = () => {
	// const { data: lists } = useSubscription(getListsQuery);

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

	const [showAdd, isShowAdd] = useState(true);
	const [showList, isShowList] = useState(false);

	const handleShowAdd = () => {
		isShowList(false);
		isShowAdd(true);
	};
	const handleShowList = () => {
		isShowAdd(false);
		isShowList(true);
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
			<div>
				<div className="row m-0 px-10">
					<div className="col-md-3 min-h-screen p-3">
						<div className="p-2 rounded d-flex flex-column gap-2">
							<button
								type="button"
								class="btn bg-white shadow fs-5"
								onClick={handleShowAdd}>
								Tambah Ahli Kubur
							</button>
							<button
								type="button"
								class="btn bg-white shadow fs-5"
								onClick={handleShowList}>
								List Ahli Kubur
							</button>
						</div>
					</div>
					<div className="col-md-9">
						<div className="p-3">
							{showAdd && <AdminAddList />}
							{showList && (
								<AdminList
									//  lists={lists}
									handleDeleteList={handleDeleteList}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
