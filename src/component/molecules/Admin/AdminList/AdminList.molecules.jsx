import React from "react";
import { useFormik, Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSubscription } from "@apollo/client";
import { getListsQuery } from "../../../../config/Apollo/lists";

const AdminList = ({ handleDeleteList }) => {
	const [nama, setNama] = useState("");
	const { data, loading } = useSubscription(getListsQuery, {
		variables: { nama: `%${nama}%` },
	});

	return (
		<div className="pt-3" style={{ background: "#F8F8FF" }}>
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
					<button className="btn btn-outline-info" type="button" id="button-addon2">
						Cari
					</button>
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
							<th className="header_action">Action</th>
						</tr>
					</thead>

					<tbody>
						{data?.lists.map((list, idx) => (
							<tr key={idx}>
								<td className="list_nama">{list.nama}</td>
								<td className="list_tipeno">{list.tipeno}</td>
								<td className="list_lahir">{list.lahir}</td>
								<td className="list_wafat">{list.wafat}</td>
								<td className="list_action">
									<button
										className="px-1 py-1 bg-danger mx-2"
										onClick={() => handleDeleteList(list.id)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											style={{ width: "20px" }}>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
									<button className="px-1 py-1 bg-warning">
										<Link className="text-white" to={`/editlist/${list.uuid}`}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												style={{ width: "20px" }}>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
												/>
											</svg>
										</Link>
									</button>
								</td>
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

export default AdminList;
