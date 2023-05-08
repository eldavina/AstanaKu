import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import React from "react";
import { insertTipesMutation } from "../../../../config/Apollo/lists";
import * as Yup from "yup";

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
		<div className="input-tipe">
			<div className="container">
				<div className="row pt-4">
					<div className="row justify-content-center">
						<div className="col-5">
							<div className="col">
								<form
									className="justify-content-end needs-validation"
									id="form"
									noValidate=""
									onSubmit={formik.handleSubmit}>
									<h2 className="" style={{ textAlign: "center" }}>
										Tambah Tipe Pemakaman
									</h2>
									{/* Tipe Pemakaman */}
									<div className="mb-3 col-6">
										<label htmlFor="namatipe" className="form-label">
											Tipe Pemakaman{" "}
										</label>
										{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
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
											// onEdit={handleEdit}
											// onChange={nameProduct}
											data-testid="inputtipe-input"
										/>
										<div className="invalid-feedback" data-testid="inputtipe-error">
											Nama tipe tidak boleh mengandung simbol
										</div>
									</div>

									{/* Ukuran Makam */}
									<div className="mb-3 col-6">
										<label htmlFor="luas" className="form-label">
											Ukuran Makam m
										</label>
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
											placeholder="Masukkan Luas Pemakaman"
											value={formik.values.luas}
											onChange={formik.handleChange}
											onEdit={formik.values.luas}
											// onEdit={handleEdit}
											// onChange={nameProduct}
											data-testid="inputluas-input"
										/>
										<div className="invalid-feedback" data-testid="inputluas-error">
											Name must have up to 5 characters, must not exceed 25 characters, and
											must not contain symbol.
										</div>
									</div>

									{/* Kapasitas */}
									<div className="mb-3 col-6">
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
										{/* <div className="invalid-feedback">{formik.errors.kapasitas}</div> */}
									</div>

									{/* Gambar Pemakaman */}
									<div className="mb-3">
										<label htmlFor="gambar" className="form-label">
											Link Gambar Pemakaman
										</label>
										<div className="col-6">
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
										{/* <div className="invalid-feedback">{formik.errors.image}</div> */}
									</div>

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
											placeholder="Masukkan Deskripsi Pemakaman"
											value={formik.values.deskripsi}
											onChange={formik.handleChange}
											onEdit={formik.values.deskripsi}
											// onEdit={handleEdit}
										/>
										<div className="invalid-feedback">Please fill out this field</div>
									</div>

									{/* Harga */}
									<label htmlFor="harga" className="form-label">
										Harga jt{" "}
									</label>
									{/* <div>{formik.errors.price && alert(`Product Price Harus Di Isi!`)}</div> */}
									<div className="mb-2">
										<div className="col-6">
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
										{/* <div className="invalid-feedback">{formik.errors.price}</div> */}
									</div>
									{/* Submit */}
									<div className="col-auto">
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
				</div>
			</div>
		</div>
	);
};
