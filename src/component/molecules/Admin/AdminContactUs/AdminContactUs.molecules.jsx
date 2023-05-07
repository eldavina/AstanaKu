import React from "react";
import { useState } from "react";
import contactus from "../../../../assets/contactus.jpg";

const AdminContactUs = () => {
	const [help, setHelp] = useState("");
	const [nama, setNama] = useState("");
	function handleSubmit() {
		const pesanWa = `https://api.whatsapp.com/send?phone=628813345505&text=Halo%20Astanaku!%20Saya,%0ANama%20:%20${encodeURIComponent(
			nama
		)}%0AKeperluan%20:%20${encodeURIComponent(help)}`;
		window.open(pesanWa, "_blank");
		console.log("link", pesanWa);
	}

	return (
		<div>
			<div id="contact-us">
				<div className="row align-items-center" style={{ padding: "" }}>
					<div className="col">
						<div className="d-flex justify-content-center">
							<form style={{ lineHeight: 1 }} id="form" onSubmit={handleSubmit}>
								<div className="mb-5 " style={{ lineHeight: 1.5 }}>
									<h1> Contact Us </h1> Ingin terhubung dengan kami? <br />
									Silahkan isi formulir di samping dengan benar, ya! <br />
									Formolir tersebut akan dihubungkan ke whatsapp kami. <br />
									Kami akan membalas pesan Anda segera
									<br />
								</div>
								<div style={{ marginTop: 10 }}>
									<label htmlFor="nama" className="form-label">
										Nama
									</label>
									<input
										className={`form-control `}
										type="text"
										id="nama"
										name="nama"
										required=""
										value={nama}
										onChange={(e) => setNama(e.target.value)}
										// value={formik.values.email}
										// onChange={formik.handleChange}
									/>
								</div>
								<div style={{ marginTop: 10 }}>
									<label htmlFor="bantuan" className="form-label">
										Apa yang kamu butuhkan?
									</label>
									<textarea
										className={`form-control`}
										id="help"
										name="help"
										required=""
										value={help}
										onChange={(e) => setHelp(e.target.value)}
									/>
									<div className="invalid-feedback">
										Masukkan Kendala Kamu dengan Benar!
									</div>
								</div>
								<br />
								<div>
									<button type="submit" className="btn btn-primary" id="btn-submit">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-md-6" id="contact-us-text">
						<div className="d-flex justify-content-center">
							<div>
								<p>
									<img src={contactus} className="w-100"></img>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminContactUs;
