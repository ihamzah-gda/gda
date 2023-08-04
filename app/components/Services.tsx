import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
	return (
		<section id="services" className="gda-section">
			<div className="gda-section-child">
				<div className="flex flex-col">
					<div className="border-b border-zinc-100/5 w-full mb-3 pb-4">
						<h2>استكشف خدماتنا</h2>
					</div>
					<div className="gda-parent-project flex-wrap mt-4">
						<Link href={`/services/ci`} key="ci" className="gda-col-project">
							<h2>تصميم هوية بصرية</h2>
							<p>تبدأ من 9,000 ريال سعودي</p>

							<div className="bg-zinc-950/20 rounded-3xl -z-50">
								<Image
									id="modal"
									src="/static/services/ci/gda-logo-service.png"
									alt="gda background image"
									quality={100}
									fill
									style={{
										objectFit: "cover",
										filter: "blur(0px)",
										opacity: "1",
										borderRadius: "24px",
										objectPosition: "center",
										height: "100%",
										width: "100%",
									}}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</Link>
						<Link
							href={`/services/ci`}
							key="profile"
							className="gda-col-project"
						>
							<h2>تصميم بروفايل</h2>
							<p>تبدأ من 1,130 ريال سعودي</p>

							<div className="bg-zinc-950/20 rounded-3xl -z-50">
								<Image
									id="modal"
									src="/static/services/profile/gda-service-profile.webp"
									alt="profile design service"
									quality={100}
									fill
									style={{
										objectFit: "cover",
										filter: "blur(0px)",
										opacity: "1",
										borderRadius: "24px",
										objectPosition: "center",
										height: "100%",
										width: "100%",
									}}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</Link>
						<Link href={`/services/ci`} key="guide" className="gda-col-project">
							<h2>تصميم دليل</h2>
							<p>تبدأ من 1,180 ريال سعودي</p>

							<div className="bg-zinc-950/20 rounded-3xl -z-50">
								<Image
									id="modal"
									src="/static/services/profile/gda-service-profile.webp"
									alt="profile design service"
									quality={100}
									fill
									style={{
										objectFit: "cover",
										filter: "blur(0px)",
										opacity: "1",
										borderRadius: "24px",
										objectPosition: "center",
										height: "100%",
										width: "100%",
									}}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</Link>
						<Link
							href={`/services/ci`}
							key="presentation"
							className="gda-col-project"
						>
							<h2>تصميم عرض تقديمي PDF</h2>
							<p>تبدأ من 935 ريال سعودي</p>

							<div className="bg-zinc-950/20 rounded-3xl -z-50">
								<Image
									id="modal"
									src="/static/services/profile/gda-service-profile.webp"
									alt="profile design service"
									quality={100}
									fill
									style={{
										objectFit: "cover",
										filter: "blur(0px)",
										opacity: "1",
										borderRadius: "24px",
										objectPosition: "center",
										height: "100%",
										width: "100%",
									}}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</Link>
						<Link
							href={`/services/ci`}
							key="presentation-template"
							className="gda-col-project"
						>
							<h2>تصميم قالب عرض تقديمي PowerPoint</h2>
							<p>تبدأ من 1,180 ريال سعودي</p>

							<div className="bg-zinc-950/20 rounded-3xl -z-50">
								<Image
									id="modal"
									src="/static/services/profile/gda-service-profile.webp"
									alt="profile design service"
									quality={100}
									fill
									style={{
										objectFit: "cover",
										filter: "blur(0px)",
										opacity: "1",
										borderRadius: "24px",
										objectPosition: "center",
										height: "100%",
										width: "100%",
									}}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</Link>
						<Link
							href={`/services/ci`}
							key="website"
							className="gda-col-project"
						>
							<h2>تصميم واستضافة موقع الكتروني تفاعلي</h2>
							<p>تبدأ من 8,500 ريال سعودي - استضافة مجانًا لمدة سنة</p>

							<div className="bg-zinc-950/20 rounded-3xl -z-50">
								<Image
									id="modal"
									src="/static/gda-bg-man5.webp"
									alt="profile design service"
									quality={100}
									fill
									style={{
										objectFit: "cover",
										filter: "blur(0px)",
										opacity: "1",
										borderRadius: "24px",
										objectPosition: "center",
										height: "100%",
										width: "100%",
									}}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</Link>
						<Link
							href={`/services/ci`}
							key="montage"
							className="gda-col-project"
						>
							<h2>مونتاج فيديو</h2>
							<p>تبدأ من 1,500 ريال</p>

							<div className="bg-zinc-950/20 rounded-3xl -z-50">
								<Image
									id="modal"
									src="/static/gda-bg-design.webp"
									alt="profile design service"
									quality={100}
									fill
									style={{
										objectFit: "cover",
										filter: "blur(0px)",
										opacity: "1",
										borderRadius: "24px",
										objectPosition: "center",
										height: "100%",
										width: "100%",
									}}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
