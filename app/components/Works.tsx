import React from "react";
import { clients } from "../constants";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

const Works = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<section id="works" className="gda-section">
				<div className="gda-section-child">
					<div className="flex flex-col">
						<div className="border-b border-zinc-100/5 w-full mb-3 pb-4">
							<h2>استكشف أعمالنا</h2>
						</div>
						<div className="gda-parent-project flex-wrap mt-3">
							{clients.length === 0 && <p>No clients found</p>}

							{clients.map((client) => (
								<Link
									href={`/pages/works/${client.id}`}
									key={client.id}
									className="gda-col-project"
								>
									<Image
										id="modal"
										src={client.logo}
										alt={`شعار ${client.clientName}`}
										quality={100}
										width="100"
										height="60"
										className="mb-5"
										style={{
											objectFit: "contain",
											objectPosition: "right",
											maxHeight: "70px",
										}}
									/>
									<h2>{client.title}</h2>
									<p>{client.clientName}</p>

									<div className="bg-zinc-950/20 rounded-3xl -z-50">
										<Image
											id="modal"
											src={client.cover}
											alt={client.title}
											quality={30}
											fill
											style={{
												objectFit: "cover",
												filter: "blur(0px)",
												opacity: "1",
												borderRadius: "24px",
												height: "100%",
												objectPosition: "left",
											}}
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>{" "}
		</Suspense>
	);
};

export default Works;
