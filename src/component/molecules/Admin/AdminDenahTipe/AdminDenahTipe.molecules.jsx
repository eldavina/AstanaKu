import React from "react";
import denah from "../../../../assets/peta.jpg";

export const AdminDenahTipe = () => {
	return (
		<div className="py-3 bg-white rounded shadow">
			<div className="Denah text-center">
				<div className="">
					<h2 className="">Denah Lokasi Pemakaman Astana</h2>
					<img src={denah} className="w-100"></img>
				</div>
			</div>
		</div>
	);
};
