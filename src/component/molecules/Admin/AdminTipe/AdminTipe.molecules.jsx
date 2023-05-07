import React from "react";
import { Link } from "react-router-dom";

export const AdminTipe = ({ tipes, handleDeleteTipe }) => {
	return (
		<div className="pt-3">
			<hr />

			<h2 className="" style={{ textAlign: "center" }}>
				Tipe Pemakaman
			</h2>
			<div className="d-flex justify-content-center">
				<div className="input-group mb-3 w-50">
					<input
						type="text"
						className="form-control"
						placeholder="Recipient's username"
						aria-label="Recipient's username"
						aria-describedby="button-addon2"
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
							<th className="header_namatipe">Nama Tipe</th>
							<th className="header_luas">Luas</th>
							<th className="header_kapasitas">Kapasitas</th>
							<th className="header_gambar">Gambar</th>
							<th className="header_deskripsi">Deskripsi</th>
							<th className="header_harga">Harga</th>
							<th className="header_action">Action</th>
						</tr>
					</thead>

					<tbody>
						{tipes?.tipes.map((tipe, idx) => (
							<tr key={idx}>
								<td className="tipes_namatipe">{tipe.namatipe}</td>
								<td className="tipes_luas">{tipe.luas}</td>
								<td className="tipes_kapasitas">{tipe.kapasitas}</td>
								<td className="tipes_gambar">{tipe.gambar}</td>
								<td className="tipes_deskripsi">{tipe.deskripsi}</td>
								<td className="tipes_harga">{tipe.harga}</td>
								<td className="tipes_action">
									<button
										className="btn btn-danger"
										// onClick={() => handleDelete(createproduct.id)}>
										onClick={() => handleDeleteTipe(tipe.id)}>
										Delete
									</button>
									<button className="btn btn-warning">
										<Link className="text-white" to={`/edittipe/${tipe.uuid}`}>
											Edit
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
