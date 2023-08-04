import React from "react";
import Image from "next/image";
import { getSortedWorksData } from "../lib/works";
import Link from "next/link";

const ProjectCardLoop = ({ allWorksData }) => {
	return (
		<div className="gda-parent-project flex-wrap">
			{allWorksData.map(({ id, date, title, cover }) => (
				<Link href={`/works/${id}`} key={id} className="gda-col-project">
					<h2>{title}</h2>
					<p>{date}</p>

					<div className="bg-zinc-950/20 rounded-3xl -z-50">
						<Image
							id="modal"
							src={cover}
							alt="gda background image"
							quality={100}
							fill
							style={{
								objectFit: "cover",
								filter: "blur(0px)",
								opacity: "1",
								borderRadius: "24px",
							}}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</Link>
			))}
		</div>
	);
};

export async function getStaticProps() {
	const allWorksData = getSortedWorksData();
	return {
		props: {
			allWorksData,
		},
	};
}

export default ProjectCardLoop;
