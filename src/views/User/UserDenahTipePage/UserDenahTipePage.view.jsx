import React, { useState } from "react";
import UserCardList from "../../../component/molecules/User/UserCardList/UserCardList.molecules";
import { UserDenahTipe } from "../../../component/molecules/User/UserDenahTipe/UserDenahTipe.molecules";
import UserNavbar from "../../../component/organism/Navbar/UserNavbar/UserNavbar.organism";

export const UserDenahTipePage = () => {
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
			<UserNavbar />
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
							{showDenah && <UserDenahTipe />}
							{showCard && <UserCardList />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
