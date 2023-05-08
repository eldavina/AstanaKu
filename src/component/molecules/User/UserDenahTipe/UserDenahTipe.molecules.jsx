import React from "react";
import denah from "../../../../assets/peta.jpg";

export const UserDenahTipe = () => {
	return (
		<div className="pt-3">
			<div className="Denah text-center">
				<div className="">
					<h2 className="">Denah Lokasi Pemakaman Astana</h2>
					<img src={denah} className="w-50"></img>
				</div>
			</div>
		</div>
	);
};
