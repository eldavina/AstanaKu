import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import React from "react";
import { insertTipesMutation } from "../../../../config/Apollo/lists";
import * as Yup from "yup";
import { useState } from "react";

export const AdminAddTipe = () => {
	const [insertTipes, { loading: loadinginsert }] =
		useMutation(insertTipesMutation);

	const regex = /[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;

	const schema = Yup.object().shape({
		namatipe: Yup.string()
			.required()
			.matches(regex, "Nama tipe tidak boleh mengandung simbol"),
		panjang: Yup.number().required(),
		lebar: Yup.number().required(),
		luas: Yup.number().required(),
		kapasitas: Yup.number().required(),
		gambar: Yup.string().required(),
		deskripsi: Yup.string().required(),
		harga: Yup.number().required(),
	});

	const formik = useFormik({
		initialValues: {
			// id: "",
			namatipe: "",
			panjang: "",
			lebar: "",
			luas: "",
			kapasitas: "",
			gambar: "",
			deskripsi: "",
			harga: "",
		},
		validationSchema: schema,
		onSubmit: async (values) => {
			console.log("cek values", values);

			insertTipes({
				variables: {
					namatipe: values.namatipe,
					panjang: values.panjang,
					lebar: values.lebar,
					luas: values.luas,
					kapasitas: values.kapasitas,
					gambar: values.gambar,
					deskripsi: values.deskripsi,
					harga: values.harga,
				},
			});

			if (window.confirm("Data tipe pemakaman berhasil ditambahkan!"));
			formik.resetForm();
		},
	});

	return (
		<div className="input-tipe py-5 pt-0">
			<div className="row p-2 rounded bg-white">
				<div className="col-7 my-3">
					<h2 className="mb-3  fs-4">Tambah Tipe Pemakaman</h2>
					<form
						className="needs-validation"
						id="form"
						noValidate=""
						onSubmit={formik.handleSubmit}>
						{/* Tipe Pemakaman */}
						<div className="mb-3 row">
							<div className="col ">
								<label htmlFor="namatipe" className="form-label fs-5">
									Tipe Pemakaman
								</label>
							</div>
							<div className="col">
								<input
									// className={`form-control ${formik.errors.name && `is-invalid`}`}
									className={`form-control`}
									type="text"
									id="namatipe"
									name="namatipe"
									required=""
									placeholder="Masukkan Nama Tipe Pemakaman"
									value={formik.values.namatipe}
									onChange={formik.handleChange}
									onEdit={formik.values.namatipe}
									data-testid="inputtipe-input"
								/>
							</div>
							<div className="invalid-feedback" data-testid="inputtipe-error">
								Nama tipe tidak boleh mengandung simbol
							</div>
						</div>

						{/* Ukuran Makam */}
						<div className="mb-3 row">
							<div className="col">
								<label htmlFor="luas" className="form-label fs-5">
									Ukuran Makam m
								</label>
							</div>
							<div className="col">
								<div className="d-flex">
									<input
										// className={`form-control ${formik.errors.name && `is-invalid`}`}
										className={`form-control`}
										type="number"
										id="panjang"
										name="panjang"
										required=""
										placeholder="Panjang"
										value={formik.values.panjang}
										onChange={formik.handleChange}
										onEdit={formik.values.panjang}
										// onEdit={handleEdit}
										// onChange={nameProduct}
										data-testid="inputluas-input"
									/>
									<a className="align-self-center mx-2 text-dark">X</a>
									<input
										// className={`form-control ${formik.errors.name && `is-invalid`}`}
										className={`form-control`}
										type="number"
										id="lebar"
										name="lebar"
										required=""
										placeholder="Lebar"
										value={formik.values.lebar}
										onChange={formik.handleChange}
										onEdit={formik.values.lebar}
										// onEdit={handleEdit}
										// onChange={nameProduct}
										data-testid="inputluas-input"
									/>
								</div>
							</div>
						</div>
						{/* Luas */}
						<div className="mb-3 row">
							<div className="col">
								<label htmlFor="luas" className="form-label fs-5">
									Luas m2
								</label>
							</div>
							{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
							<div className="col">
								<input
									// className={`form-control ${formik.errors.name && `is-invalid`}`}
									className={`form-control`}
									type="text"
									id="luas"
									name="luas"
									required=""
									placeholder="Masukkan Luas Pemakaman"
									value={formik.values.luas}
									onChange={formik.handleChange}
									onEdit={formik.values.luas}
									// onEdit={handleEdit}
									// onChange={nameProduct}
									data-testid="inputluas-input"
								/>
							</div>
							<div className="invalid-feedback" data-testid="inputluas-error">
								Name must have up to 5 characters, must not exceed 25 characters, and
								must not contain symbol.
							</div>
						</div>

						{/* Kapasitas */}
						<div className="mb-3 row">
							<div className="col">
								<label htmlFor="kapasitas" className="form-label fs-5">
									Kapasitas{" "}
								</label>
							</div>
							<div className="col">
								{/* <div>{formik.errors.category && alert(`Product Category Harus Di Isi!`)}</div> */}
								<select
									// className={`form-select ${formik.errors.name && `is-invalid`}`}
									className={`form-select`}
									aria-label="kapasitas"
									placeholder="Choose...."
									id="kapasitas"
									name="kapasitas"
									required=""
									value={formik.values.kapasitas}
									onChange={formik.handleChange}
									onEdit={formik.values.kapasitas}
									// onEdit={handleEdit}
								>
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
							</div>
							{/* <div className="invalid-feedback">{formik.errors.kapasitas}</div> */}
						</div>

						{/* Gambar Pemakaman */}
						<div className="mb-3 row">
							<div className="col">
								<label htmlFor="gambar" className="form-label fs-5">
									Link Gambar Pemakaman
								</label>
							</div>
							<div className="col">
								<div className="col">
									<input
										// className={`form-control btn btn-primary ${
										// 	formik.errors.image && `is-invalid`
										// }`}
										className={`form-control`}
										type="text"
										id="gambar"
										name="gambar"
										required=""
										placeholder="Masukkan Link Gambar"
										value={formik.values.gambar}
										onChange={formik.handleChange}
										onEdit={formik.values.gambar}
										// onEdit={handleEdit}
									/>
								</div>
							</div>
							{/* <div className="invalid-feedback">{formik.errors.image}</div> */}
						</div>

						{/* Deskripsi*/}
						<div className="row">
							<div className="col">
								<label htmlFor="deskripsi" className="form-label fs-5">
									Deskripsi
								</label>
							</div>
							<div className="col">
								<div className="input-group">
									<textarea
										className="form-control"
										aria-label="With textarea"
										id="deskripsi"
										name="deskripsi"
										required=""
										placeholder="Masukkan Deskripsi Pemakaman"
										value={formik.values.deskripsi}
										onChange={formik.handleChange}
										onEdit={formik.values.deskripsi}
										// onEdit={handleEdit}
									/>
								</div>
								<div className="invalid-feedback">Please fill out this field</div>
							</div>
						</div>

						{/* Harga */}
						<div className="row  mt-3">
							<div className="col">
								<label htmlFor="harga" className="form-label fs-5">
									Harga jt{" "}
								</label>
							</div>
							{/* <div>{formik.errors.price && alert(`Product Price Harus Di Isi!`)}</div> */}
							<div className="col">
								<div className="mb-2">
									<div className="col">
										<input
											type="number"
											// className={`form-control ${formik.errors.price && `is-invalid`}`}
											className={`form-control`}
											placeholder="Rp. ......."
											id="harga"
											name="harga"
											required=""
											value={formik.values.harga}
											onChange={formik.handleChange}
											onEdit={formik.values.harga}
											// onEdit={handleEdit}
										/>
									</div>
								</div>
								{/* <div className="invalid-feedback">{formik.errors.price}</div> */}
							</div>
						</div>
						{/* Submit */}
						<div className="col-auto mt-3">
							<button
								type="submit"
								// onClick={formik.handleSubmit}
								className="btn btn-info w-100 text-white"
								data-bs-toggle="modal"
								data-bs-target="#submit"
								id="button-add"
								data-testid="btnSubmit"
								//value={onSubmit}
								// onClick={onSubmit}
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};
