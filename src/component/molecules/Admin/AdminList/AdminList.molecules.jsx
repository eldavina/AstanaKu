import React from "react";
import { useFormik, Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

// const ListItem = ({ createproducts, handleDelete,  }) => {
const AdminList = ({ lists, handleDeleteList }) => {
	return (
		<div className="pt-3">
			<hr />

			<h2 className="" style={{ textAlign: "center" }}>
				List Ahli Kubur
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
							<th className="header_nama">Nama Ahli Kubur</th>
							<th className="header_tipeno">Tipe/No</th>
							<th className="header_lahir">Lahir</th>
							<th className="header_wafat">Wafat</th>
							<th className="header_action">Action</th>
						</tr>
					</thead>

					<tbody>
						{lists?.lists.map((list, idx) => (
							<tr key={idx}>
								<td className="list_nama">{list.nama}</td>
								<td className="list_tipeno">{list.tipeno}</td>
								<td className="list_lahir">{list.lahir}</td>
								<td className="list_wafat">{list.wafat}</td>
								<td className="list_action">
									<button
										className="btn btn-danger"
										// onClick={() => handleDelete(createproduct.id)}>
										onClick={() => handleDeleteList(list.id)}>
										Delete
									</button>
									<button className="btn btn-warning">
										<Link className="text-white" to={`/editlist/${list.uuid}`}>
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

export default AdminList;
