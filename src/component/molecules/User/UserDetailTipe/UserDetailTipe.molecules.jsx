import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { getDetailTipesByUuidQuery } from "../../../../config/Apollo/lists";

export const UserDetailTipe = () => {
	const { id } = useParams();
	const { data: tipes } = useQuery(getDetailTipesByUuidQuery, {
		variables: { uuid: id },
	});
	function handleSubmit() {
		window.history.back();
	}

	function handleSubmitWa() {
		const pesanWa = `https://api.whatsapp.com/send?phone=628813345505&text=Halo%20Astanaku!%20Saya%20ingin%20mengetahui%20produk%20ini!`;
		window.open(pesanWa, "_blank");
	}
	return (
		<div>
			<div className="pt-3" style={{ paddingLeft: "90px" }}>
				<button onClick={handleSubmit} class="btn btn-outline-info">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-chevron-left"
						viewBox="0 0 16 16"
						style={{ marginRight: "20px" }}>
						{" "}
						<path
							fillRule="evenodd"
							d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>{" "}
					</svg>
					Kembali
				</button>
			</div>
			{tipes?.tipes.map((item, idx) => (
				<div id="contact-us" key={idx}>
					<div className="row mx-4 gap-3 pt-3" style={{ padding: "50px" }}>
						<div className="col-md-6" id="contact-us-text">
							<div className="d-flex justify-content-center">
								<div>
									<p>
										<img src={item.gambar} className="w-100"></img>
									</p>
								</div>
							</div>
						</div>
						<div className="col mt-0 gap-3">
							<div>
								<a className="fw-normal text-dark" style={{ fontSize: "20px" }}>
									Detail Tipe
								</a>
								<h2 className="display-1">{item.namatipe} </h2>
								<h3>Rp. {item.harga}.000.000</h3>
							</div>
							<hr />
							<div style={{ fontSize: "20px" }}>
								<div className="row">
									<div style={{ width: "20px" }} className="col justify-content-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 256 256"
											style={{ width: "20px" }}>
											<rect width="256" fill="none" />
											<rect
												x="26.2"
												y="82.7"
												width="203.6"
												height="90.51"
												rx="8"
												transform="translate(-53 128) rotate(-45)"
												fill="none"
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="8"
											/>
											<line
												x1="132"
												y1="60"
												x2="164"
												y2="92"
												fill="none"
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="8"
											/>
											<line
												x1="96"
												y1="96"
												x2="128"
												y2="128"
												fill="none"
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="8"
											/>
											<line
												x1="60"
												y1="132"
												x2="92"
												y2="164"
												fill="none"
												stroke="#000"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="8"
											/>
										</svg>

										<a className="mx-4 text-dark">Ukuran</a>
										<a className="mx-4 fw-normal text-dark">
											{item.panjang}m X {item.lebar}m{/* </div> */}
										</a>
									</div>
								</div>
								<div className="row">
									<div style={{ width: "20px" }} className="col justify-content-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											className="bi bi-rulers"
											viewBox="0 0 16 16"
											id="IconChangeColor">
											{" "}
											<path
												d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z"
												id="mainIconPathAttribute"></path>{" "}
										</svg>
										<a className="ms-4 me-5 text-dark">Luas </a>
										<a className="ms-3 fw-normal text-dark ">{item.luas} m2</a>
									</div>
								</div>
								<div className="row">
									<div style={{ width: "20px" }} className="col justify-content-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-people"
											viewBox="0 0 16 16">
											{" "}
											<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />{" "}
										</svg>
										<a className="mx-4 text-dark">Kapasitas</a>
										<a className="mx-2 fw-normal text-dark">{item.kapasitas} makam</a>
									</div>
								</div>
								<hr />
								<div>
									<a className=" text-dark">Deskripsi</a>
									<div className="lh-base">{item.deskripsi}</div>
								</div>
								<div className="d-flex justify-content-center mt-5">
									<button
										className="w-100 btn btn-outline-info  fs-4"
										onClick={handleSubmitWa}>
										Pesan Sekarang
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
