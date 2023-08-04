// pages/works/[id].tsx

import Image from "next/image";
import Project from "@/app/components/Project";

const projectInfo = {
	id: "socpa",
	logo: "/static/projects/socpa/socpa-logo.svg",
	title: "تصميم كتب وأدلة وعروض تقديمية",
	date: "19-Mar-2022",
	clientName: "الهيئة السعودية للمراجعين والمحاسبين",
	scope: "تصميم كتب وأدلة، تصميم عروض تقديمية",
	deliverables: "كتب، أدلة، عروض تقديمية",
	cover: "/static/projects/socpa/socpa-cover.webp",
	color: "bg-gradient-to-bl from-[#165691]/70",
	imagePaths: [
		//  image-1
		"/static/projects/socpa/1socpa.webp",
		//  image-2
		"/static/projects/socpa/2socpa.webp",
		//  image-3
		"/static/projects/socpa/3socpa.webp",
		//  image-4
		"/static/projects/socpa/4socpa.webp",
		//  image-5
		"/static/projects/socpa/5socpa.webp",
		//  image-6
		"/static/projects/socpa/6socpa.webp",
	],
	// Video Content
	vsrc: "",
	vposter: "",
	v1src: "",
	v1poster: "",
	v2src: "",
	v2poster: "",
	v3src: "",
	v3poster: "",
	v4src: "",
	v4poster: "",
	v5src: "",
	v5poster: "",
	v6src: "",
	v6poster: "",

	bold1: "عن الهيئة السعودية للمراجعين والمحاسبين Socpa",
	content1:
		"هي هيئة مهنية نقوم من خلال المعارف والمهارات المتوفرة لدينا بريادة مهنة المحاسبة والمراجعة والإشراف عليها بالمملكة العربية السعودية، بهدف تحسين وتطوير مزاولتها والنهوض بها ومراقبة جودة ادائها وتنمية الوعي بقواعدها وسلوكياتها وتعزيز مشاركتها في خدمة الاقتصاد الوطني والمجتمع . كما نعمل بكل جهد ممكن لتطوير ودعم الأفراد والمؤسسات والمجموعات المختلفة ذات العلاقة بالعمل التجاري لزيادة الثقة والشفافية في القوائم المالية وحماية المستثمرين ومستخدمي القوائم المالية.",
	bold2: "عن عملنا مع الهيئة السعودية للمراجعين والمحاسبين",
	content2:
		"تم العمل مع الهيئة السعودية للمراجعين والمحاسبين على إنجاز مجموعة من الكتب والأدلة والحقائب التدريبية بمخرجات جاهزة للطباعة ورقمية وشرائح عرض تدريبية حيث تم التعاون في أعمال تجهيز وإعداد المحتوى مروراً بمرحلة التصميم والتنسيق للمحتوى حتى المراجعة والإخراج النهائي وذلك وفقاً لهوية الهيئة ومتطلباتها لتكون المخرجات متسقة وتتبع سمة وقواعد موحدة.",
};

export const metadata = {
	title: projectInfo.title,
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
