import React from "react";
import Image from "next/image";
import Statistics from "./Statistics";

const Hero = () => {
	return (
		<div className="h-screen flex flex-col justify-end pb-16">
			<section className="flex flex-col md:flex-row items-end lg:items-center w-full max-w-[1080px] mx-auto gap-4 p-3 relative">
				{/* Bg Gradient */}
				<div className="absolute -z-[99] w-[50%] h-[50%] -right-[20%] rounded-full yellow_gradient top-0" />
				{/* Bg Gradient */}
				<div className="absolute -z-[10] -left-[10%] top-0 w-[50%] h-[50%] rounded-full blue_gradient" />
				<div className="absolute -z-[10] -left-[10%] bottom-0 w-[50%] h-[50%] rounded-full pink_gradient" />

				{/* right content start */}
				<div className="mx-3">
					<h1 className="text-5xl leading-[4rem] mb-8">
						حيث تتلاقى الأفكار الإبداعية مع التقنيات المبتكرة لخلق تجارب فريدة
					</h1>
					<p className="text-lg">
						وكالة التصميم الرمادي شريكك الرقمي التسويقي المتكامل، نبتكر ونطور
						حلولًا إبداعية رقمية مدروسة ومتناسبة مع خصائص كل مشروع على حدة.
					</p>
				</div>
				{/* left image start */}
				<div className="w-2/3 md:w-1/2 flex-shrink-0 -bottom-10 relative">
					<Image
						className="w-full h-full object-cover object-left"
						src="/assets/gda-front.webp"
						alt="gda front image"
						id="hero"
						width="800"
						height="800"
						quality={90}
						style={{
							objectFit: "contain",
							objectPosition: "right",
						}}
					/>
				</div>
			</section>

			{/* Statistics Section */}
			<Statistics />
		</div>
	);
};

export default Hero;
