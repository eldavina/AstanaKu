import React from "react";
import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { getListsQuery } from "../../../../config/Apollo/lists";
import Loading from "../../../atoms/Loading";

// const ListItem = ({ createproducts, handleDelete,  }) => {
const UserList = () => {
	const [nama, setNama] = useState("");
	const { data, loading } = useSubscription(getListsQuery, {
		variables: { nama: `%${nama}%` },
	});

	return (
		<div className="bg-white rounded shadow mx-5 mt-3">
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
				<div className="table-responsive p-5 pt-3">
					<table className="table table-bordered">
						<thead className="table-light">
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
					{data?.lists.length == 0 && (
						<div className="d-flex justify-content-center w-100 py-4">
							{" "}
							Tidak ditemukan!!!
						</div>
					)}
					{loading && (
						<div
							className="d-flex justify-content-center "
							style={{ height: "110px" }}>
							<Loading />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserList;
