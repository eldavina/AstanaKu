import { useFormik, Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useCreateProductSelector } from "../../../../config/createProductSelector";
import { updateProducts } from "../../../../config/productThunk";
import CreateProduct from "../../../../views/createProduct/CreateProduct.view";
import Navbar from "../../../organism/UserNavbar.organism";

const EditProduct = () => {
	const { id } = useParams();
	const createproducts = useCreateProductSelector();
	const createproduct = createproducts.find(
		(productData) => productData.id == id
	);
	console.log("anu", createproduct);
	const regex = /[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const schema = Yup.object().shape({
		name: Yup.string()
			.required()
			.matches(regex, "Product Name Must Not Contain Symbol")
			.min(5, "Product Name Too Short!")
			.max(25, "Product Name Must Not Exceed 25 Characters"),
		category: Yup.string().required(),
		image: Yup.string().required(),
		freshness: Yup.string().required(),
		description: Yup.string(),
		price: Yup.number().positive().integer().required(),
	});
	const formik = useFormik({
		initialValues: {
			id: createproduct.id,
			name: createproduct.name,
			category: createproduct.category,
			image: createproduct.image,
			freshness: createproduct.freshness,
			description: createproduct.description,
			price: createproduct.price,
		},
		validationSchema: schema,
		onSubmit: (values) => {
			console.log("cek values", values);
			dispatch(updateProducts({ no: createproduct.no, ...values }));
			if (
				window.confirm(
					"Your data successfully edited. The page will redirect to the create product page"
				)
			) {
				navigate("/createproduct");
			}
		},
	});
	return (
		<div>
			<Navbar />
			<div className="inpuut-product">
				<div className="container">
					<div className="row">
						<div className="row justify-content-center">
							<div className="col-5">
								<div className="col">
									<form
										className="justify-content-end needs-validation"
										id="form"
										noValidate=""
										// onSubmit={formik.handleSubmit}
									>
										<h2 style={{ fontSize: 23 }}>Detail Product</h2>

										<div className="mb-3 col-8">
											<label htmlFor="name" className="form-label">
												Product No{""}
											</label>
											<input
												className={`form-control`}
												type="text"
												id="productno"
												name="productno"
												readOnly
												disabled
												defaultValue={createproduct.id}
												value={createproduct.id}
											/>
										</div>

										{/* Product Name */}
										<div className="mb-3 col-6">
											<label htmlFor="name" className="form-label">
												Product Name{" "}
											</label>
											{/* <div>{formik.errors.name && alert(`Product Name Harus Di Isi!`)}</div> */}
											<input
												className={`form-control ${formik.errors.name && `is-invalid`}`}
												type="text"
												id="name"
												name="name"
												required=""
												defaultValue={createproduct.name}
												value={formik.values.name}
												onChange={formik.handleChange}
												// onEdit={handleEdit}
												// onChange={nameProduct}
												data-testid="inputname-input"
											/>
											<div className="invalid-feedback" data-testid="inputname-error">
												Name must have up to 5 characters, must not exceed 25 characters,
												and must not contain symbol.
											</div>
										</div>

										{/* Product Category */}
										<div className="mb-3 col-5">
											<label htmlFor="category" className="form-label">
												Product Category{" "}
											</label>
											{/* <div>{formik.errors.category && alert(`Product Category Harus Di Isi!`)}</div> */}
											<select
												className={`form-select ${formik.errors.name && `is-invalid`}`}
												aria-label="productcategory"
												placeholder="Choose...."
												id="category"
												name="category"
												required=""
												defaultValue={createproduct.category}
												value={formik.values.category}
												onChange={formik.handleChange}

												// onEdit={handleEdit}
											>
												<option value={""}>Choose....</option>
												<option value={"A"}>A</option>
												<option value={"B"}>B</option>
												<option value={"C"}>C</option>
											</select>
											<div className="invalid-feedback">{formik.errors.category}</div>
										</div>

										{/* Image of Product */}
										{/* <div className="mb-3">
										<label htmlFor="image" className="form-label">
											Image of Product
										</label>
										<div className="col-6">
											<input
												className={`form-control btn btn-primary ${
													formik.errors.image && `is-invalid`
												}`}
												type="file"
												id="image"
												name="image"
												required=""
												defaultValue={createproduct.image}
												value={formik.values.image}
												onChange={formik.handleChange}

											/>
										</div>
										<div className="invalid-feedback">{formik.errors.image}</div>
									</div> */}

										{/* Product Freshness */}
										<div className="mb-3">
											<label htmlFor="freshness" className="form-label">
												Product Freshness{" "}
											</label>
											{/* <div>{formik.errors.freshness && alert(`Product Freshness Harus Di Isi!`)}</div> */}
											<div
												id="form-check has-validation"
												className={`form-control ${
													formik.errors.freshness && `is-invalid`
												}`}>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="freshness"
														id="freshness"
														value={"Brand New"}
														defaultValue={"Brand New" === createproduct.freshness}
														checked={"Brand New" === formik.values.freshness}
														onChange={formik.handleChange}

														// onEdit={handleEdit}
													/>
													<label className="form-check-label" htmlFor="brandnew">
														Brand New
													</label>
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="freshness"
														id="freshness"
														value={"Second Hand"}
														defaultValue={"Second Hand" === createproduct.freshness}
														checked={"Second Hand" === formik.values.freshness}
														onChange={formik.handleChange}

														// onEdit={handleEdit}
													/>
													<label className="form-check-label" htmlFor="secondhand">
														Second Hand
													</label>
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="freshness"
														id="freshness"
														value={"Refurbished"}
														defaultValue={"Refurbished" === createproduct.freshness}
														checked={"Refurbished" === formik.values.freshness}
														onChange={formik.handleChange}

														// onEdit={handleEdit}
													/>
													<label className="form-check-label" htmlFor="refurbished">
														Refurbished
													</label>
												</div>
												<div className="invalid-feedback">{formik.errors.freshness}</div>
											</div>
										</div>

										{/* Additional Description*/}
										<label htmlFor="description" className="form-label">
											Additional Description
										</label>
										<div className="input-group">
											<textarea
												className="form-control"
												aria-label="With textarea"
												id="description"
												name="description"
												required=""
												defaultValue={createproduct.description}
												value={formik.values.description}
												onChange={formik.handleChange}

												// onEdit={handleEdit}
											/>
											<div className="invalid-feedback">Please fill out this field</div>
										</div>

										{/* Produk Price */}
										<label htmlFor="productprice" className="form-label">
											Product Price{" "}
										</label>
										{/* <div>{formik.errors.price && alert(`Product Price Harus Di Isi!`)}</div> */}
										<div className="mb-3">
											<div className="col-2">
												<input
													type="number"
													className={`form-control ${formik.errors.price && `is-invalid`}`}
													placeholder="$ 100"
													id="price"
													name="price"
													required=""
													defaultValue={createproduct.price}
													value={formik.values.price}
													onChange={formik.handleChange}

													// onEdit={handleEdit}
												/>
											</div>
											<div className="invalid-feedback">{formik.errors.price}</div>
										</div>
										{/* Submit */}
										<div className="col-auto">
											<button
												type="submit"
												onClick={formik.handleSubmit}
												className="btn btn-primary w-100"
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

export default EditProduct;
