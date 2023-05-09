import React from "react";
import { useFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { insertListsMutation } from "../../../../config/Apollo/lists";

export const AdminAddList = () => {
	const [insertLists, { loading: loadinginsert }] =
		useMutation(insertListsMutation);

	const regex = /[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;

	const schema = Yup.object().shape({
		nama: Yup.string()
			.required()
			.matches(regex, "Nama tidak boleh mengandung simbol"),
		tipeno: Yup.string().required(),
		lahir: Yup.string().required(),
		wafat: Yup.string().required(),
	});
	const formik = useFormik({
		initialValues: {
			nama: "",
			tipeno: "",
			lahir: "",
			wafat: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {
			console.log("cek values", values);

			insertLists({
				variables: {
					nama: values.nama,
					tipeno: values.tipeno,
					lahir: values.lahir,
					wafat: values.wafat,
				},
			});
			if (window.confirm("Data ahli kubur berhasil dibuat!"));
			formik.resetForm();
		},
	});
	console.log(formik.values);
	return (
		<div className="input-tipe py-5 pt-0">
			<div className="row p-2 rounded bg-white shadow">
				<div className="col-7 my-3">
					<h2 className="mb-3  fs-4">Tambah Ahli Kubur</h2>
					<form
						className="needs-validation"
						id="form"
						noValidate=""
						onSubmit={formik.handleSubmit}>
						{/* Nama */}
						<div className="mb-3 row">
							<div className="col ">
								<label htmlFor="nama" className="form-label">
									Nama Ahli Kubur{" "}
								</label>
							</div>
							{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
							<div className="col ">
								<input
									className={`form-control ${formik.errors.name && `is-invalid`}`}
									// className={`form-control `}
									type="text"
									id="nama"
									name="nama"
									required=""
									placeholder="Masukkan Nama Ahli Kubur"
									// defaultValue={list.nama}
									value={formik.values.nama}
									onChange={formik.handleChange}
									// onEdit={handleEdit}
									// onChange={nameProduct}
									data-testid="inputname-input"
								/>
							</div>
							<div className="invalid-feedback" data-testid="inputname-error">
								Nama tidak boleh mengandung simbol
							</div>
						</div>

						{/* Tipe/No */}
						<div className="mb-3 row">
							<div className="col ">
								<label htmlFor="tipeno" className="form-label">
									Tipe/No{" "}
								</label>
							</div>
							<div className="col ">
								{/* <div>{formik.errors.category && alert(`Product Category Harus Di Isi!`)}</div> */}
								<select
									// className={`form-select ${formik.errors.tipeno && `is-invalid`}`}
									className={`form-select`}
									aria-label="tipeno"
									placeholder="Choose...."
									id="tipeno"
									name="tipeno"
									required=""
									// defaultValue={list.tipeno}
									value={formik.values.tipeno}
									onChange={formik.handleChange}

									// onEdit={handleEdit}
								>
									<option value={""}>Tipe/No ....</option>
									<option value={"A-1a"}>A-1a</option>
									<option value={"A-1b"}>A-1b</option>
									<option value={"A-1c"}>A-1c</option>
									<option value={"A-1d"}>A-1d</option>
									<option value={"A-2a"}>A-2a</option>
									<option value={"A-2b"}>A-2b</option>
									<option value={"A-2c"}>A-2c</option>
									<option value={"A-2d"}>A-2d</option>
									<option value={"A-3a"}>A-3a</option>
									<option value={"A-3b"}>A-3b</option>
									<option value={"A-3c"}>A-3c</option>
									<option value={"A-3d"}>A-3d</option>
									<option value={"A-4a"}>A-4a</option>
									<option value={"A-4b"}>A-4b</option>
									<option value={"A-4c"}>A-4c</option>
									<option value={"A-4d"}>A-4d</option>
									<option value={"A-5a"}>A-5a</option>
									<option value={"A-5b"}>A-5b</option>
									<option value={"A-5c"}>A-5c</option>
									<option value={"A-5d"}>A-5d</option>
									<option value={"A-6a"}>A-6a</option>
									<option value={"A-6b"}>A-6b</option>
									<option value={"A-6c"}>A-6c</option>
									<option value={"A-6d"}>A-6d</option>
									<option value={"A-7a"}>A-7a</option>
									<option value={"A-7b"}>A-7b</option>
									<option value={"A-7c"}>A-7c</option>
									<option value={"A-7d"}>A-7d</option>
									<option value={"A-8a"}>A-8a</option>
									<option value={"A-8b"}>A-8b</option>
									<option value={"A-8c"}>A-8c</option>
									<option value={"A-8d"}>A-8d</option>
									<option value={"B-1"}>B-1</option>
									<option value={"B-2"}>B-2</option>
									<option value={"B-3"}>B-3</option>
									<option value={"B-4"}>B-4</option>
									<option value={"B-5"}>B-5</option>
									<option value={"B-6"}>B-6</option>
									<option value={"B-7"}>B-7</option>
									<option value={"B-8"}>B-8</option>
									<option value={"B-9"}>B-9</option>
									<option value={"B-10"}>B-10</option>
									<option value={"B-11"}>B-11</option>
									<option value={"B-12"}>B-12</option>
									<option value={"B-13"}>B-13</option>
									<option value={"B-14"}>B-14</option>
									<option value={"B-15"}>B-15</option>
									<option value={"B-16"}>B-16</option>
									<option value={"B-17"}>B-17</option>
									<option value={"B-18"}>B-18</option>
									<option value={"B-19"}>B-19</option>
									<option value={"B-20"}>B-20</option>
									<option value={"C-1a"}>C-1a</option>
									<option value={"C-1b"}>C-1b</option>
									<option value={"C-2a"}>C-2a</option>
									<option value={"C-2b"}>C-2b</option>
									<option value={"C-3a"}>C-3a</option>
									<option value={"C-3b"}>C-3b</option>
									<option value={"C-4a"}>C-4a</option>
									<option value={"C-4b"}>C-4b</option>
									<option value={"C-5a"}>C-5a</option>
									<option value={"C-5b"}>C-5b</option>
									<option value={"C-6a"}>C-6a</option>
									<option value={"C-6b"}>C-6b</option>
									<option value={"C-7a"}>C-7a</option>
									<option value={"C-7b"}>C-7b</option>
									<option value={"C-8a"}>C-8a</option>
									<option value={"C-8b"}>C-8b</option>
									<option value={"C-9a"}>C-9a</option>
									<option value={"C-9b"}>C-9b</option>
									<option value={"C-10a"}>C-10a</option>
									<option value={"C-10b"}>C-10b</option>
									<option value={"C-11a"}>C-111</option>
									<option value={"C-11b"}>C-11b</option>
									<option value={"C-12a"}>C-12a</option>
									<option value={"C-12b"}>C-12b</option>
								</select>
								{/* <div className="invalid-feedback">{formik.errors.category}</div> */}
							</div>
						</div>

						{/* Lahir */}
						<div className="mb-3 row">
							<div className="col ">
								<label htmlFor="lahir" className="form-label">
									Lahir{" "}
								</label>
							</div>
							<div className="col ">
								<input
									className={`form-control `}
									type="date"
									id="lahir-input"
									name="lahir"
									// value={dateLahir}
									// onChange={handleDateLahirChange}
									// defaultValue={list.dateLahir}
									value={formik.values.lahir}
									onChange={formik.handleChange}
									// onEdit={handleEdit}
								/>
							</div>
						</div>
						{/* Wafat */}
						<div className="mb-3 row">
							<div className="col ">
								<label htmlFor="wafat" className="form-label">
									Wafat{" "}
								</label>
							</div>
							<div className="col ">
								<input
									className={`form-control `}
									type="date"
									id="wafat-input"
									name="wafat"
									// value={dateWafat}
									// onChange={handleDateWafatChange}
									// defaultValue={list.dateWafat}
									value={formik.values.wafat}
									onChange={formik.handleChange}
									// onEdit={handleEdit}
								/>
							</div>
						</div>
						{/* Submit */}
						<div className="col-auto ">
							<button
								type="submit"
								// onClick={formik.handleSubmit}
								className="btn btn-info w-100 text-white"
								data-bs-toggle="modal"
								data-bs-target="#submit"
								id="button-add"
								data-testid="btnSubmit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
