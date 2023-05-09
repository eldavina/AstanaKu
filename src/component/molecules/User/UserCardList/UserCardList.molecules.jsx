import React from "react";
import { useQuery, useSubscription } from "@apollo/client";
import { getTipesQuery } from "../../../../config/Apollo/lists";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../atoms/Loading";

const UserCardList = () => {
	const [limit, setLimit] = useState(3);
	const [namatipe, setNamaTipe] = useState("");
	const { data: tipes, loading } = useSubscription(getTipesQuery, {
		variables: { namatipe: `%${namatipe}%` },
	});
	return (
		<div className="bg-white rounded shadow">
			<div className="Tipe text-center pt-4">
				<h2>Tipe Makam</h2>
			</div>
			<div className="container">
				<div className="d-flex justify-content-center">
					<div className="input-group mb-3 w-50 pt-3">
						<input
							type="text"
							className="form-control"
							placeholder="Masukkan nama tipe yang dicari disini"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
							value={namatipe}
							onChange={(e) => setNamaTipe(e.target.value)}
						/>
					</div>
				</div>
				<div className="row gap-2 gap-md-5 pt-3 pb-5 justify-content-center">
					{tipes?.tipes.map((item, idx) => (
						<div key={idx} className="col-md-3 ">
							<div className="card shadow bg-white rounded overflow-hidden">
								<img
									src={item.gambar}
									style={{ width: "305px" }}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{item.namatipe}</h5>
									<p className="card-text">Rp. {item.harga}.000.000</p>
									<button className="btn btn-info">
										<Link className="text-white" to={`/detailtipe/${item.uuid}`}>
											Lihat Detail
										</Link>
									</button>
								</div>
							</div>
						</div>
					))}
					{tipes?.tipes.length == 0 && (
						<div className="d-flex justify-content-center w-100 py-4">
							{" "}
							Tidak ditemukan!!!
						</div>
					)}
					{loading && (
						<div
							className="d-flex justify-content-center "
							style={{ height: "110px" }}>
							<Loading />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserCardList;
