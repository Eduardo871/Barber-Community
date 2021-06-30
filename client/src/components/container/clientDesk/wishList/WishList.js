import React from "react";

const WishList = ({ wlApp }) => {
	return (
		<div className="grid sm:grid-cols-1 sm:grid-cols-4">
			<p> {wlApp.id}</p>
			{wlApp.serviceBarbers &&
				wlApp.serviceBarbers.map((service) => (
					<div
						key={service.id}
						className="text-center m-8 border rounded-xl pb-1 shadow-md"
					>
						<img
							className="rounded-lg h-48 w-full"
							src={service.image}
							alt=""
							width="200px"
							height="200px"
						/>
						<h4 className="font-bold">{service.favorite.serviceName}</h4>
					</div>
				))}
		</div>
	);
};
export default WishList;
