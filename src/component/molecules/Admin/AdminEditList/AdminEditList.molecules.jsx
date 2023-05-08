import { useMutation, useQuery } from "@apollo/client";
import { useFormik, Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
	getDetailListsByUuidQuery,
	updateListsMutationbyUuidMutation,
} from "../../../../config/Apollo/lists";

const AdminEditList = () => {
	const { id } = useParams();
	console.log(id);

	const { loading: loadingquery, data: editdata } = useQuery(
		getDetailListsByUuidQuery,
		{
			variables: { uuid: id },
		}
	);

	const [updateList, { loading: loadingupdate }] = useMutation(
		updateListsMutationbyUuidMutation
	);

	const list = editdata ? editdata.lists[0] : [];

	const regex = /[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;

	const formik = useFormik({
		initialValues: {
			uuid: id,
			nama: list.nama,
			tipeno: list.tipeno,
			lahir: list.lahir,
			wafat: list.wafat,
		},
		validationSchema: Yup.object().shape({
			nama: Yup.string().matches(regex, "Nama tidak boleh mengandung simbol"),
		}),
		onSubmit: (values) => {
			console.log("cek values", values);
			updateList({
				variables: {
					uuid: id,
					nama: values.nama,
					tipeno: values.tipeno,
					lahir: values.lahir,
					wafat: values.wafat,
				},
			});
			if (window.confirm("Data ahli kubur berhasil di-edit!"));
			window.history.back();
		},
	});

	useEffect(() => {
		formik.values.nama = list.nama;
		formik.values.tipeno = list.tipeno;
		formik.values.lahir = list.lahir;
		formik.values.wafat = list.wafat;
	}, [list]);

	if (loadingquery) return console.log({ loadingquery });
	console.log(
		formik.values.nama,
		formik.values.tipeno,
		formik.values.lahir,
		formik.values.wafat,
		list.nama
	);

	return (
		<div>
			<div className="add-data">
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
											Edit Data Ahli Kubur
										</h2>

										{/* ID Ahli Kubur */}
										<div className="mb-3 col-8">
											<label htmlFor="uuid" className="form-label">
												ID Ahli Kubur{""}
											</label>
											<input
												className={`form-control`}
												type="uuid"
												id="uuid"
												name="uuid"
												readOnly
												disabled
												defaultValue={list.uuid}
												value={formik.values.uuid}
											/>
										</div>

										{/* Nama */}
										<div className="mb-3 col-6">
											<label htmlFor="nama" className="form-label">
												Nama Ahli Kubur{" "}
											</label>
											{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
											<input
												// className={`form-control ${formik.errors.name && `is-invalid`}`}
												className={`form-control `}
												type="text"
												id="nama"
												name="nama"
												required=""
												defaultValue={list.nama}
												value={formik.values.nama}
												onChange={formik.handleChange}
												data-testid="inputname-input"
											/>
											<div className="invalid-feedback" data-testid="inputname-error">
												Nama tidak boleh mengandung simbol.
											</div>
										</div>

										{/* Tipe/No */}
										<div className="mb-3 col-6">
											<label htmlFor="tipeno" className="form-label">
												Tipe/No{" "}
											</label>
											<br />
											{/* <div>{formik.errors.category && alert(`Product Category Harus Di Isi!`)}</div> */}
											<select
												// className={`form-select ${formik.errors.tipeno && `is-invalid`}`}
												className={`form-select`}
												aria-label="tipeno"
												placeholder="Choose...."
												id="tipeno"
												name="tipeno"
												required=""
												defaultValue={list.tipeno}
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

										{/* Lahir */}
										<div className="mb-3 col-6">
											<label htmlFor="lahir" className="form-label">
												Lahir{" "}
											</label>
											<br />
											<input
												className={`form-control `}
												type="date"
												id="lahir-input"
												name="lahir"
												// value={dateLahir}
												// onChange={handleDateLahirChange}
												defaultValue={list.lahir}
												value={formik.values.lahir}
												onChange={formik.handleChange}
												// onEdit={handleEdit}
											/>
										</div>
										{/* Wafat */}
										<div className="mb-3 col-6">
											<label htmlFor="wafat" className="form-label">
												Wafat{" "}
											</label>
											<br />
											<input
												className={`form-control `}
												type="date"
												id="wafat-input"
												name="wafat"
												// value={dateWafat}
												// onChange={handleDateWafatChange}
												defaultValue={list.wafat}
												value={formik.values.wafat}
												onChange={formik.handleChange}
												// onEdit={handleEdit}
											/>
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
		</div>
	);
};

export default AdminEditList;
