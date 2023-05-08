import React from "react";
import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { getListsQuery } from "../../../../config/Apollo/lists";

// const ListItem = ({ createproducts, handleDelete,  }) => {
const UserList = () => {
	const [nama, setNama] = useState("");
	const { data, loading } = useSubscription(getListsQuery, {
		variables: { nama: `%${nama}%` },
	});

	return (
		<div className="pt-3">
			<h2 className="" style={{ textAlign: "center" }}>
				List Ahli Kubur
			</h2>
			<div className="d-flex justify-content-center">
				<div className="input-group mb-3 w-50">
					<input
						type="text"
						className="form-control"
						placeholder="Masukkan nama ahli kubur yang dicari disini"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
						value={nama}
						onChange={(e) => setNama(e.target.value)}
					/>
				</div>
			</div>
			<div className="table-responsive p-5">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th className="header_nama">Nama Ahli Kubur</th>
							<th className="header_tipeno">Tipe/No</th>
							<th className="header_lahir">{"Lahir (tahun-bulan-tanggal)"}</th>
							<th className="header_wafat">{"Wafat (tahun-bulan-tanggal)"}</th>
						</tr>
					</thead>

					<tbody>
						{data?.lists.map((list, idx) => (
							<tr key={idx}>
								<td className="list_nama">{list.nama}</td>
								<td className="list_tipeno">{list.tipeno}</td>
								<td className="list_lahir">{list.lahir}</td>
								<td className="list_wafat">{list.wafat}</td>
							</tr>
						))}
					</tbody>
					{/* <tbody id="datatable"></tbody> */}
				</table>
				{/* Akhir Tabel Data */}
			</div>
		</div>
	);
};

export default UserList;
