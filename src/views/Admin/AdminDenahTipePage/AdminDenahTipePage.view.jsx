import React from "react";
import { useState } from "react";
import AdminCardList from "../../../component/molecules/Admin/AdminCardList/AdminCardList.molecules";
import { AdminDenahTipe } from "../../../component/molecules/Admin/AdminDenahTipe/AdminDenahTipe.molecules";
import AdminNavbar from "../../../component/organism/Navbar/AdminNavbar/AdminNavbar.organism";

export const AdminDenahTipePage = () => {
	const [showDenah, isShowDenah] = useState(true);
	const [showCard, isShowCard] = useState(false);

	const handleShowDenah = () => {
		isShowCard(false);
		isShowDenah(true);
	};
	const handleShowCard = () => {
		isShowCard(true);
		isShowDenah(false);
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
								onClick={handleShowDenah}>
								Denah Astana
							</button>
							<button
								type="button"
								class="btn bg-white shadow fs-5"
								onClick={handleShowCard}>
								Tipe Pemakaman
							</button>
						</div>
					</div>
					<div className="col-md-9">
						<div className="p-3">
							{showDenah && <AdminDenahTipe />}
							{showCard && <AdminCardList />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
