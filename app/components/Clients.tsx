import React from "react";
import { logos } from "../constants";

const Clients = () => {
	return (
		<section className="gda-section">
			{/* Bg Gradient */}
			<div className="absolute -z-[10] -left-[20%] top-0 w-[50%] h-[50%] rounded-full blue_gradient" />
			{/* Bg Gradient */}
			<div className="absolute -z-[10] -left-[20%] bottom-0 w-[50%] h-[50%] rounded-full pink_gradient" />
			<div className="gda-section-child">
				<div className="border-b border-zinc-100/5 w-full mb-3 pb-4">
					<h2>شركاء النجاح</h2>
				</div>
				<div className="grid grid-cols-3 md:grid-cols-5 grid-rows-3 gap-12 pt-5 place-items-center">
					{logos.map((logo) => (
						<div
							key={logo.alt}
							className="sm:max-w-[120px] max-w-[100px] pointer-events-none select-none"
						>
							<img
								src={logo.logo}
								alt={logo.alt}
								className="sm:w-[120px] w-[100px] object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;
