import React from "react";
import CountUp from "react-countup";

const Statistics = () => {
	return (
		<section className="gda-section">
			<div className="gda-section-child absolute">
				<div className="mx-3 lg:mx-3 mb-3  grid grid-cols-2 sm:grid-cols-4 gap-4">
					{/* Numbers Div 1 */}
					<div className="flex flex-col">
						<CountUp
							end={6000}
							delay={0.3}
							start={0}
							duration={4}
							suffix="+"
							className="text-5xl font-bold"
						/>
						<span className="text-2xl mt-0">صورة</span>
					</div>
					{/* Numbers Div 2 */}
					<div className="flex flex-col">
						<CountUp
							end={82}
							delay={0.6}
							start={0}
							duration={4}
							suffix="+"
							className="text-5xl font-bold"
						/>
						<span className="text-2xl mt-0">عميل</span>
					</div>
					{/* Numbers Div 3 */}
					<div className="flex flex-col ">
						<CountUp
							end={820}
							delay={0.9}
							start={0}
							duration={4}
							suffix="+"
							className="text-5xl font-bold"
						/>
						<span className="text-2xl mt-0">دقيقة فيديو</span>
					</div>
					{/* Numbers Div 4 */}
					<div className="flex flex-col">
						<CountUp
							end={476}
							delay={1.2}
							start={0}
							duration={4}
							suffix="+"
							className="text-5xl font-bold"
						/>
						<span className="text-2xl mt-0">شعار وهوية بصرية</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Statistics;
