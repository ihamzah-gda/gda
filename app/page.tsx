// app/page.tsx

"use client";

import Link from "next/link";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import { Suspense } from "react";
import Works from "./components/Works";
import Services from "./components/Services";

export default function Home() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<main>
				<div className="pb-24">
					{/* Hero Section */}
					<Hero />

					{/* Work Section */}
					<Works />
					{/* Services Section */}
					{/* <Services /> */}
					<Services />
					{/* Clients Section */}
					<Clients />

					{/* CTA Section */}
					<Suspense fallback="loading ...">
						<section id="contact-us" className="gda-section">
							<div className="gda-section-child">
								<div className="flex flex-col">
									<div className="border-b border-zinc-100/5 w-full mb-3 pb-4">
										<h2>تواصل معنا</h2>
									</div>
									<div className="gda-parent-project flex-wrap mt-4"></div>
								</div>
							</div>
						</section>
					</Suspense>
				</div>
			</main>
		</Suspense>
	);
}
