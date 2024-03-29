import { useSubscription } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getTipesQuery } from "../../../../config/Apollo/lists";
import Loading from "../../../atoms/Loading";
// import Loading from "../../../../assets/loading.svg";

export const AdminTipe = ({ tipes, handleDeleteTipe }) => {
	const [namatipe, setNamaTipe] = useState("");
	const { data, loading } = useSubscription(getTipesQuery, {
		variables: { namatipe: `%${namatipe}%` },
	});

	return (
		<div className="pt-3 rounded shadow bg-white">
			<h2 className="" style={{ textAlign: "center" }}>
				Tipe Pemakaman
			</h2>
			<div className="d-flex justify-content-center">
				<div className="input-group w-50">
					<input
						type="text"
						className="form-control"
						placeholder="Masukkan tipe pemakaman yang dicari disini"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
						value={namatipe}
						onChange={(e) => setNamaTipe(e.target.value)}
					/>
				</div>
			</div>
			<div className="table-responsive p-5 pt-3">
				<table className="table table-bordered align-self-center bg-white rounded">
					<thead className="table-light">
						<tr>
							<th className="header_namatipe">Nama Tipe</th>
							<th className="header_luas">Ukuran{"(m)"}</th>
							<th className="header_luas">Luas{"(m2)"}</th>
							<th className="header_kapasitas">Kapasitas</th>
							<th className="header_gambar">Gambar</th>
							<th className="header_deskripsi">Deskripsi</th>
							<th className="header_harga">Harga{"(jt)"}</th>
							<th className="header_action">Action</th>
						</tr>
					</thead>

					<tbody>
						{data?.tipes.map((tipe, idx) => (
							<tr key={idx}>
								<td className="tipes_namatipe">{tipe.namatipe}</td>
								<td className="tipes_ukuran">
									{tipe.panjang} X {tipe.lebar}
								</td>
								<td className="tipes_luas">{tipe.luas}</td>
								<td className="tipes_kapasitas">{tipe.kapasitas}</td>
								<td className=" tipes_gambar ">
									<a
										href={tipe.gambar}
										target="_blank"
										className="d-inline-block text-truncate"
										style={{ width: "200px" }}>
										{tipe.gambar}
									</a>
								</td>
								<td className="tipes_deskripsi">
									<p
										className="tipes_deskripsi text-truncate"
										style={{ width: "200px" }}>
										{tipe.deskripsi}
									</p>
								</td>
								<td className="tipes_harga">{tipe.harga}</td>
								<td className="d-flex tipes_action">
									<button
										className="px-1 py-1 bg-danger mx-1 "
										onClick={() => handleDeleteTipe(tipe.id)}>
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
										<Link className="text-white" to={`/edittipe/${tipe.uuid}`}>
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
				{data?.tipes.length == 0 && (
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
	);
};
