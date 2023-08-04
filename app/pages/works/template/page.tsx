// pages/works/[id].tsx

import Image from "next/image";
import Project from "@/app/components/Project";

const projectInfo = {
	id: "",
	logo: "",
	title: "test",
	date: "",
	clientName: "",
	scope: "",
	deliverables: "",
	cover: "",
	color: "",
	imagePaths: [
		//  image-1
		"/static/projects/",
		//  image-2
		"/static/projects/",
		//  image-3
		"/static/projects/",
		//  image-4
		"/static/projects/",
		//  image-5
		"/static/projects/",
		//  image-6
		"/static/projects/",
	],
	// Video Content
	vsrc: "/static/projects/",
	vposter: "/static/projects/",
	v1src: "/static/projects/",
	v1poster: "/static/projects/",
	v2src: "/static/projects/",
	v2poster: "/static/projects/",
	v3src: "/static/projects/",
	v3poster: "/static/projects/",
	v4src: "/static/projects/",
	v4poster: "/static/projects/",
	v5src: "/static/projects/",
	v5poster: "/static/projects/",
	v6src: "/static/projects/",
	v6poster: "/static/projects/",

	bold1: "",
	content1: "",
	bold2: "",
	content2: "",
};

export const metadata = {
	title: `GDA - ${projectInfo.title}`,
	description: projectInfo.scope,
	openGraph: {
		title: `GDA - ${projectInfo.title}`,
		description: projectInfo.scope,
	},
};

export default function ProjectPage() {
	return (
		<div>
			<article className=" m-0 grid grid-cols-1 place-items-center pb-24 pt-[50vh] mx-3 z-50">
				<div className="">
					<div key={"data"} className="rounded-3xl  mt-4">
						<div className="gda-parent">
							<div className="gda-col gda-hover gda-blur">
								<h3>العميل</h3>
								<p>{projectInfo.clientName}</p>
							</div>
							<div className="gda-col gda-hover gda-blur">
								<h3>نطاق العمل</h3>
								<p>{projectInfo.scope}</p>
							</div>
							<div className="gda-col gda-hover gda-blur min-w-[25%]">
								<h3>المخرجات</h3>
								<p>{projectInfo.deliverables}</p>
							</div>
							<div className="gda-col gda-hover gda-blur">
								<h3>التاريخ</h3>
								<p dir="ltr" className="text-right">
									{projectInfo.date}
								</p>
							</div>
						</div>
					</div>
					<div className="gda-container gda-blur max-w-[1080px] gda-hover p-6">
						<h1> {projectInfo.title}</h1>
						{projectInfo.date}
						<br />
						<h2>{projectInfo.bold1}</h2>
						<p>{projectInfo.content1}</p>
						<h2>{projectInfo.bold2}</h2>
						<p>{projectInfo.content2}</p>

						{projectInfo.vsrc && projectInfo.vposter && (
							<div className="gda-container">
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={projectInfo.vposter}
									>
										<source src={projectInfo.vsrc} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}
						{projectInfo.v1src && projectInfo.v1poster && (
							<div className="gda-container">
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={projectInfo.v1poster}
									>
										<source src={projectInfo.v1src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}
						{projectInfo.v2src && projectInfo.v2poster && (
							<div className="gda-container">
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={projectInfo.v2poster}
									>
										<source src={projectInfo.v2src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}
						{projectInfo.v3src && projectInfo.v3poster && (
							<div className="gda-container">
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={projectInfo.v3poster}
									>
										<source src={projectInfo.v3src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}
						{projectInfo.v4src && projectInfo.v4poster && (
							<div className="gda-container">
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={projectInfo.v4poster}
									>
										<source src={projectInfo.v4src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}
						{projectInfo.v5src && projectInfo.v5poster && (
							<div className="gda-container">
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={projectInfo.v5poster}
									>
										<source src={projectInfo.v5src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}
						{projectInfo.v6src && projectInfo.v6poster && (
							<div className="gda-container">
								<div className="mt-4">
									<video
										controls
										className="w-full h-auto gda-container"
										poster={projectInfo.v6poster}
									>
										<source src={projectInfo.v6src} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							</div>
						)}
					</div>
				</div>
				{projectInfo.imagePaths && (
					<Project imageUrls={projectInfo.imagePaths} />
				)}
			</article>

			<div id="bg" className="">
				{/* Logo Image Start */}
				<div className="absolute top-0 w-full -z-20">
					<div className="relative top-0 h-[65vh] max-w-[1080px] mx-auto">
						<div className="absolute top-1/2 right-5 transform -translate-y-1/2 w-1/4 h-1/4">
							<Image
								id="modal"
								src={projectInfo.logo}
								alt="gda logo image"
								quality={100}
								fill
								style={{ objectFit: "contain", objectPosition: "right" }}
							/>
						</div>
					</div>
				</div>
				{/* Logo Image End */}

				{/* Bg Image Start */}
				<div
					className={`fixed -z-30 h-full w-full top-0 left-0 gda-mask  ${projectInfo.color}`}
				></div>

				<div className="absolute -z-50 h-[65vh] w-full top-0 left-0 gda-mask">
					<Image
						id="modal"
						src={projectInfo.cover}
						alt={`صورة تخيلية لـ${projectInfo.title}`}
						quality={90}
						fill
						className="z-1"
						style={{ objectFit: "cover", objectPosition: "left center" }}
					/>
				</div>
			</div>
		</div>
	);
}
