// pages/works/[id].tsx

"use client";

import { clients } from "@/app/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Project from "@/app/components/Project";

interface Params {
	id: string;
}

export default function ProjectPage({ params }: { params: Params }) {
	const project = clients.find((p) => p.id === params.id);

	if (!project) {
		return <p>Project not found</p>;
	}

	return (
		<div>
			<article className=" m-0 grid grid-cols-1 place-items-center pb-24 pt-[50vh] mx-3 z-50">
				<div className="">
					<div key={"data"} className="rounded-3xl  mt-4">
						<div className="gda-parent">
							<div className="gda-col gda-hover gda-blur">
								<h3>العميل</h3>
								<p>{project.clientName}</p>
							</div>
							<div className="gda-col gda-hover gda-blur">
								<h3>نطاق العمل</h3>
								<p>{project.scope}</p>
							</div>
							<div className="gda-col gda-hover gda-blur min-w-[25%]">
								<h3>المخرجات</h3>
								<p>{project.deliverables}</p>
							</div>
							<div className="gda-col gda-hover gda-blur">
								<h3>التاريخ</h3>
								<p dir="ltr" className="text-right">
									{project.date}
								</p>
							</div>
						</div>
					</div>
					<div className="gda-container gda-blur max-w-[1080px] gda-hover p-6">
						<h1> {project.title}</h1>
						{project.date}
						<br />
						<h2>{project.bold1}</h2>
						<p>{project.content1}</p>
						<h2>{project.bold2}</h2>
						<p>{project.content2}</p>

						{project.vsrc && project.vposter && (
							<motion.div
								initial={{ opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 1.5 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="gda-container"
							>
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={project.vposter}
									>
										<source src={project.vsrc} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						)}
						{project.v1src && project.v1poster && (
							<motion.div
								initial={{ opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 1.5 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="gda-container"
							>
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={project.v1poster}
									>
										<source src={project.v1src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						)}
						{project.v2src && project.v2poster && (
							<motion.div
								initial={{ opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 1.5 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="gda-container"
							>
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={project.v2poster}
									>
										<source src={project.v2src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						)}
						{project.v3src && project.v3poster && (
							<motion.div
								initial={{ opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 1.5 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="gda-container"
							>
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={project.v3poster}
									>
										<source src={project.v3src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						)}
						{project.v4src && project.v4poster && (
							<motion.div
								initial={{ opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 1.5 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="gda-container"
							>
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={project.v4poster}
									>
										<source src={project.v4src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						)}
						{project.v5src && project.v5poster && (
							<motion.div
								initial={{ opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 1.5 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="gda-container"
							>
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={project.v5poster}
									>
										<source src={project.v5src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						)}
						{project.v6src && project.v6poster && (
							<motion.div
								initial={{ opacity: 0 }}
								transition={{ ease: "easeInOut", duration: 1.5 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="gda-container"
							>
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={project.v6poster}
									>
										<source src={project.v6src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</motion.div>
						)}
					</div>
				</div>
				{project.imagePaths && <Project imageUrls={project.imagePaths} />}
			</article>

			<div id="bg" className="">
				{/* Logo Image Start */}
				<div className="absolute top-0 w-full -z-20">
					<div className="relative top-0 h-[65vh] max-w-[1080px] mx-auto">
						<motion.div
							key="bg"
							initial={{ opacity: 0 }}
							transition={{ ease: "easeInOut", duration: 3 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="absolute top-1/2 right-5 transform -translate-y-1/2 w-1/4 h-1/4"
						>
							<Image
								id="modal"
								src={project.logo}
								alt="gda logo image"
								quality={100}
								fill
								style={{ objectFit: "contain", objectPosition: "right" }}
							/>
						</motion.div>
					</div>
				</div>
				{/* Logo Image End */}

				{/* Bg Image Start */}
				<motion.div
					key={project.id}
					initial={{ opacity: 0 }}
					transition={{ ease: "easeInOut", duration: 0.5 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={`fixed -z-30 h-full w-full top-0 left-0 gda-mask  ${project.color}`}
				></motion.div>

				<motion.div
					key="bg"
					initial={{ opacity: 0 }}
					transition={{ ease: "easeInOut", duration: 3 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="absolute -z-50 h-[65vh] w-full top-0 left-0 gda-mask"
				>
					<Image
						id="modal"
						src={project.cover}
						alt={`صورة تخيلية لـ${project.title}`}
						quality={90}
						fill
						className="z-1"
						style={{ objectFit: "cover", objectPosition: "left center" }}
					/>
				</motion.div>
			</div>
		</div>
	);
}

export async function generateStaticParams() {
	return clients.map((project) => ({
		id: project.id,
	}));
}
