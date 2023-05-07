import React from "react";
import denah from "../../../../assets/peta.jpg";

export const UserDenahTipe = () => {
	return (
		<div className="pt-3">
			<div className="Denah text-center">
				<div className="">
					<h2 className="">Denah Lokasi Pemakaman Astana</h2>
					<img src={denah} className="w-50"></img>
				</div>
			</div>
			<div>
				<div className="" style={{ backgroundColor: "#53e2ff" }}>
					<div className="Tipe text-center pt-3">
						<h2>Tipe Makam</h2>
					</div>
					{/* <div>
						<div className="container">
							<h3 className="product-list text-center pt-4">Product List</h3>
							<div className="input-group mb-8 w-25 pt-4 mx-auto">
								<input
									type="text"
									class="form-control"
									placeholder="Enter product name...."
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
								/>
								<button class="btn btn-primary" type="button" id="button-addon2">
									Search
								</button>
							</div>
							<div className="row gap-2 gap-md-0  mb-3 pt-4">
								{products?.products.slice(0, limit).map((item, idx) => (
									<div key={idx} className="col-md-3">
										<div className="card">
											<img
												src="https://placehold.co/600x400"
												className="card-img-top"
												alt="..."
											/>
											<div className="card-body">
												<h5 className="card-title">{item.name}</h5>
												<p className="card-text">{item.description}</p>
												<a href="#" className="btn btn-primary">
													Go somewhere
												</a>
											</div>
										</div>
									</div>
								))}
							</div>
							{products?.products.length > limit && (
								<button onClick={handleLoadMore} className="btn btn-primary">
									Load More
								</button>
							)}
						</div> 
					 </div> */}
				</div>
			</div>
		</div>
	);
};
