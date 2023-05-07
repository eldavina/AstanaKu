import { useMutation, useQuery } from "@apollo/client";
import { useFormik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import {
	getDetailTipesByUuidQuery,
	updateTipesMutationbyUuidMutation,
} from "../../../../config/Apollo/lists";
import * as Yup from "yup";
import { useEffect } from "react";

export const AdminEditTipe = () => {
	const { idtipe } = useParams();
	// console.log(id);

	const { loading: loadingquery, data: editdata } = useQuery(
		getDetailTipesByUuidQuery,
		{
			variables: { uuid: idtipe },
		}
	);

	const [updateTipe, { loading: loadingupdate }] = useMutation(
		updateTipesMutationbyUuidMutation
	);

	const tipe = editdata ? editdata.tipes[0] : [];

	const regex = /[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;

	const formik = useFormik({
		initialValues: {
			uuid: idtipe,
			namatipe: tipe.namatipe,
			luas: tipe.luas,
			kapasitas: tipe.kapasitas,
			// gambar: tipe.gambar,
			deskripsi: tipe.deskripsi,
			harga: tipe.harga,
		},
		validationSchema: Yup.object().shape({
			namatipe: Yup.string().matches(
				regex,
				"Nama pemakaman tidak boleh mengandung simbol"
			),
		}),
		onSubmit: (values) => {
			console.log("cek values", values);
			updateTipe({
				variables: {
					uuid: idtipe,
					namatipe: values.namatipe,
					luas: values.luas,
					kapasitas: values.kapasitas,
					// gambar: values.gambar,
					deskripsi: values.deskripsi,
					harga: values.harga,
				},
			});
			if (window.confirm("Data tipe pemakaman berhasil di-edit!"));
			window.history.back();
		},
	});

	useEffect(() => {
		formik.values.namatipe = tipe.namatipe;
		formik.values.luas = tipe.luas;
		formik.values.kapasitas = tipe.kapasitas;
		// formik.values.gambar = tipe.gambar;
		formik.values.deskripsi = tipe.deskripsi;
		formik.values.harga = tipe.harga;
	}, [tipe]);

	if (loadingquery) return console.log({ loadingquery });
	console.log(
		formik.values.namatipe,
		formik.values.luas,
		formik.values.kapasitas,
		formik.values.gambar,
		formik.values.deskripsi,
		formik.values.harga,
		tipe.namatipe
	);
	return (
		<div className="input-tipe">
			<div className="container">
				<div className="row">
					<div className="row justify-content-center">
						<div className="col-5">
							<div className="col">
								<form
									className="justify-content-end needs-validation"
									id="form"
									noValidate=""
									onSubmit={formik.handleSubmit}>
									<h2 className="" style={{ textAlign: "center" }}>
										Edit Data Ahli Kubur
									</h2>

									{/* ID Tipe Pemakaman */}
									<div className="mb-3 col-8">
										<label htmlFor="uuid" className="form-label">
											ID Tipe Pemakaman{""}
										</label>
										<input
											className={`form-control`}
											type="uuid"
											id="uuid"
											name="uuid"
											readOnly
											disabled
											defaultValue={tipe.uuid}
											value={formik.values.uuid}
										/>
									</div>

									{/* Tipe Pemakaman */}
									<div className="mb-3 col-6">
										<label htmlFor="tipe" className="form-label">
											Nama Tipe Pemakaman{" "}
										</label>
										{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
										<input
											// className={`form-control ${formik.errors.name && `is-invalid`}`}
											className={`form-control`}
											type="text"
											id="namatipe"
											name="namatipe"
											required=""
											defaultValue={tipe.namatipe}
											value={formik.values.namatipe}
											onChange={formik.handleChange}
										/>
										<div className="invalid-feedback" data-testid="inputtipe-error">
											Nama tipe tidak boleh mengandung simbol.
										</div>
									</div>

									{/* Luas */}
									<div className="mb-3 col-6">
										<label htmlFor="luas" className="form-label">
											Luas m2
										</label>
										{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
										<input
											// className={`form-control ${formik.errors.name && `is-invalid`}`}
											className={`form-control`}
											type="text"
											id="luas"
											name="luas"
											required=""
											defaultValue={tipe.luas}
											value={formik.values.luas}
											onChange={formik.handleChange}
										/>
										<div className="invalid-feedback" data-testid="inputluas-error">
											Name must have up to 5 characters, must not exceed 25 characters, and
											must not contain symbol.
										</div>
									</div>

									{/* Kapasitas */}
									<div className="mb-3 col-5">
										<label htmlFor="kapasitas" className="form-label">
											Kapasitas{" "}
										</label>
										{/* <div>{formik.errors.category && alert(`Product Category Harus Di Isi!`)}</div> */}
										<select
											// className={`form-select ${formik.errors.name && `is-invalid`}`}
											className={`form-select`}
											aria-label="kapasitas"
											placeholder="Choose...."
											id="kapasitas"
											name="kapasitas"
											required=""
											defaultValue={tipe.kapasitas}
											value={formik.values.kapasitas}
											onChange={formik.handleChange}>
											<option value={""}>Choose....</option>
											<option value={"1"}>1</option>
											<option value={"2"}>2</option>
											<option value={"3"}>3</option>
											<option value={"4"}>4</option>
											<option value={"5"}>5</option>
											<option value={"6"}>6</option>
											<option value={"7"}>7</option>
											<option value={"8"}>8</option>
										</select>
										{/* <div className="invalid-feedback">{formik.errors.kapasitas}</div> */}
									</div>

									{/* Gambar Pemakaman */}
									{/* <div className="mb-3">
										<label htmlFor="image" className="form-label">
											Gambar Pemakaman
										</label>
										<div className="col-6">
											<input
												// className={`form-control btn btn-primary ${
												// 	formik.errors.image && `is-invalid`
												// }`}
												className={`form-control`}
												type="file"
												id="gambar"
												name="gambar"
												required=""
												defaultValue={tipe.gambar}
												value={formik.values.gambar}
												onChange={formik.handleChange}
											/>
										</div>
										
									</div> */}

									{/* Deskripsi*/}
									<label htmlFor="deskripsi" className="form-label">
										Deskripsi
									</label>
									<div className="input-group">
										<textarea
											className="form-control"
											aria-label="With textarea"
											id="deskripsi"
											name="deskripsi"
											required=""
											defaultValue={tipe.deskripsi}
											value={formik.values.deskripsi}
											onChange={formik.handleChange}
										/>
										<div className="invalid-feedback">Please fill out this field</div>
									</div>

									{/* Harga */}
									<label htmlFor="productprice" className="form-label">
										Harga{" "}
									</label>
									{/* <div>{formik.errors.price && alert(`Product Price Harus Di Isi!`)}</div> */}
									<div className="mb-3">
										<div className="col-4">
											<input
												type="number"
												// className={`form-control ${formik.errors.price && `is-invalid`}`}
												className={`form-control`}
												placeholder="Rp. ......."
												id="harga"
												name="harga"
												required=""
												defaultValue={tipe.harga}
												value={formik.values.harga}
												onChange={formik.handleChange}
											/>
										</div>
										{/* <div className="invalid-feedback">{formik.errors.price}</div> */}
									</div>
									{/* Submit */}
									<div className="col-auto">
										<button
											type="submit"
											className="btn btn-info w-100"
											data-bs-toggle="modal"
											data-bs-target="#submit"
											id="button-add"
											data-testid="btnSubmit">
											Edit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
