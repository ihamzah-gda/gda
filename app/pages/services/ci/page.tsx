"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Project from "../../../components/Project";
import Link from "next/link";

const serviceInfo = {
	title: "تصميم هوية بصرية",
	price: "9,000 ريال سعودي",
	duration: "14 يوم",
	name: "خدمة تصميم هوية بصرية",
	description: "شعار مع هوية بصرية للشركة، عرض تقديمي مخصص",
	details: `
    استنادًا إلى فهمنا العميق لطبيعة عملك، رؤيتك، رسالتك، وجمهورك المستهدف
نقدم لك شعاراً وهوية بصرية مبتكرة، تبقى راسخة في أذهان الناس، وتقدم صورة ملموسة وواضحة لماهية عملك ورسالته.

نعمل بجد لتعزيز هويتك التجارية بشكل متسق عبر جميع نقاط الاتصال مع العملاء، من خلال تصميم تجسيدات بصرية فريدة لهويتك. هذا يساعد في إنشاء نمط عمل منظم وفعال يعزز ويثبت صورة العلامة التجارية الإيجابية لديك.

نحن نهدف إلى تقديم حلول تصميم متكاملة تدعم تطور عملك وتحقق أهدافك

باستخدام أحدث التقنيات والممارسات الجيدة في مجال التصميم، نضمن تقديم هوية تجارية تميزك عن منافسيك وتجعلك أكثر جاذبية لجمهورك المستهدف.

استثمر في هويتك التجارية اليوم واكتشف الفرق الذي يمكن أن نقدمه لك اتصل بنا لبدء الرحلة نحو تأسيس علامة تجارية أقوى وأكثر تأثيرًا.
    `,
	order:
		"https://graydesign.sa/adv/crm/forms/quote/d5833fd653f961ed1122b1336fa8bfa7?styled=1&with_logo=1",
	keywords: [
		"شعار",
		"هوية الشركة",
		"تصميم",
		"العلامة التجارية",
		"تجربة العلامة التجارية",
		"الهوية البصرية",
		"الترويج",
		"استراتيجية العلامة التجارية",
		"إعلان",
		"موقع الكتروني",
		"التصميم الجرافيكي",
		"العلامات التجارية",
		"الرموز",
		"ألوان العلامة التجارية",
		"الخطوط",
		"التعبئة والتغليف",
		"الطباعة",
		"التسويق",
		"التواصل الاجتماعي",
		"الرسومات",
		"التصوير الفوتوغرافي",
		"الفيديو",
		"الرسوم المتحركة",
		"الإعلانات",
		"التطبيقات",
		"التجارة الإلكترونية",
		"البروشورات",
		"الكتيبات",
		"البوسترات",
		"الكروت الشخصية",
	],
	deliverables: [
		"- ملفات الشعار بصيغة Ai + PNG + PDF.",
		"-  دليل إرشادي للهوية.",
		"- ملفات تطبيقات الهوية بصيغة PDF + Ai.",
		"- ملف العرض الفني للهوية بصيغة PDF.",
	],
	cover: "/static/services/ci/gda-logo-service.png",
	imagePaths: [
		"/static/services/ci/gda-logo-service.png",
		"/static/services/ci/gda-artist2.webp",
	],
	vsrc: "",
	vposter: "",
};

export default function service() {
	return (
		<div>
			{" "}
			<article className="m-0 flex flex-col justify-center items-center pt-[40vh] mx-3 pb-24">
				<div className="">
					<div className="gda-container gda-blur max-w-[1080px] gda-hover p-6">
						<h1> {serviceInfo.title}</h1>
						<div>
							{serviceInfo.details.split("\n").map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
					</div>
					<div key={"data"} className="rounded-3xl  mt-4">
						<div className="gda-parent">
							<div className="gda-col gda-hover gda-blur min-w-[20%]">
								<h3>اسم الخدمة</h3>
								<p>{serviceInfo.name}</p>
								<h3>مدة التنفيذ</h3>
								<p>{serviceInfo.duration} على الأقل</p>
							</div>
							<div className="gda-col gda-hover gda-blur min-w-[30%]">
								<h3>المخرجات</h3>
								{serviceInfo.deliverables.map((item, index) => (
									<p key={index}>{item}</p>
								))}
							</div>
							<Link
								id="order"
								href={serviceInfo.order}
								className="gda-col gda-hover gda-blur md:min-w-[25%] md:max-w-[25%]"
							>
								<h3>السعر</h3>
								<p dir="ltr" className="text-right">
									يبدأ من <strong>{serviceInfo.price}</strong>
								</p>
								<div className="mt-3 flex flex-row items-center gap-2 text-white font-medium font-Skolar cursor-pointer active:border-none py-2 px-3 gda-container gda-hover gda-blur">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
									</span>
									اطلب الخدمة
								</div>
							</Link>
						</div>
					</div>

					{serviceInfo.vsrc && serviceInfo.vposter && (
						<motion.div
							initial={{ opacity: 0 }}
							transition={{ ease: "easeInOut", duration: 1.5 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="gda-container mb-6"
						>
							<div className="mt-4">
								<video
									controls
									className="w-full h-auto gda-container"
									poster={serviceInfo.vposter}
								>
									<source src={serviceInfo.vsrc} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</motion.div>
					)}
				</div>
				<div className="gda-container gda-blur gda-hover w-full flex flex-col max-w-[1080px] p-6">
					<Project imageUrls={serviceInfo.imagePaths} />
				</div>
				<div className="gda-container gda-blur gda-hover w-full flex flex-col max-w-[1080px] my-3 p-6">
					<h2>الشروط والاحكام</h2>
					<h3>البند الأول - الغرض من الخدمة:</h3>
					<p>
						العمل على تصميم عناصر الهوية بصرية بناءً على الشعار الحالي المُقدم
						من العميل وتسليمه جميع العناصر التابعة لهذه الخدمة والمذكورة في
						البند الرابع &quot;مخرجات الخدمة&quot;.
					</p>
					<br />
					<h3>البند الثاني - مدة تنفيذ الخدمة:</h3>
					<p>
						مدة تنفيذ الخدمة هي عشرة أيام عمل تُحتسب من اليوم التالي لتاريخ
						إستلام وكالة التصميم الرمادي الدفعة الأولى من إجمالي قيمة العقد. لا
						تشمل هذه المدة الأيام التي يستغرقها العميل لتعميد كل مرحلة من مراحل
						العمل.
					</p>
					<br />
					<h3>البند الثالث - آلية العمل:</h3>
					<p>
						يتم إتمام العمل على عدة مراحل حسب الترتيب المحدد في هذا البند بدءاً
						من المرحلة الأولى حتى الأخيرة، ويتم تعميد كل مرحلة على حدة ولا يتم
						الإنتقال لتنفيذ المرحلة التالية حتى يتم تعميد المرحلة التي تسبقها.
						تبدأ المرحلة الأولى بتصميم تطبيقات الهوية البصرية بناءً على الشعار
						الحالي المُقدم من العميل وتسليم العميل ملف بصيغة &quot;PDF&quot;
						يحتوي على عرض فني لتطبيقات الهوية البصرية ويتم تنفيذ هذه المرحلة
						خلال مدة أقصاها سبعة أيام عمل. تليها المرحلة الثانية بعد إستلام
						العميل لعرض تصميم الهوية البصرية بشكل رسمي وفقاً &quot;لآلية التواصل
						والتعميد المذكورة في البند الخامس من شروط وأحكام العقد&quot; يجب
						عليه تعميد الهوية البصرية بناءً على العرض المرسل خلال مدة أقصاها
						يومين عمل، كما يحق للعميل في هذه المرحلة طلب التعديل على الهوية
						البصرية وفقاً لشروط &quot;سياسة التعديل في البند الخامس&quot; أو طلب
						إلغاء المشروع وفقاً لشروط &quot;سياسة الإلغاء في البند الثامن ضمن
						شروط وأحكام العقد&quot;. المرحلة الثالثة والأخيرة تبدأ بعد تعميد
						العميل للهوية البصرية بشكل رسمي، وتتضمن هذه المرحلة العمل على تنفيذ
						عناصر الهوية البصرية والدليل الإرشادي الرقمي للهوية وتستغرق هذه
						المرحلة مدة أقصاها ثلاثة أيام عمل يليها تسليم العميل كافة مخرجات
						الخدمة المذكورة في &quot;البند الرابع مخرجات الخدمة&quot;.
					</p>
					<br />
					<h3>البند الرابع - مخرجات الخدمة:</h3>
					<p>
						جميع المخرجات المتعلقة بخدمة &quot; تصميم هوية بصرية&quot; يتم
						تسليمها بصيغة &quot;Adobe Illustrator&quot; و &quot;PDF&quot;،
						وتشتمل هذه المخرجات على سبيل الحصر:
					</p>
					<li>ألوان الهوية.</li>
					<li> خطوط الهوية.</li>
					<li>الورق الرسمي.</li>
					<li>ورق الخطابات الداخلية.</li>
					<li>ورق الملاحظات.</li>
					<li>ورق المذكرات.</li>
					<li>بطاقات العمل.</li>
					<li>بطاقات الموظفين.</li>
					<li>ختم.</li>
					<li>ظرف مقاس صغير &quot;DL&quot;.</li>
					<li>ظرف مقاس متوسط &quot;C4&quot;.</li>
					<li>سند قبض.</li>
					<li>سند صرف.</li>
					<li>فولدر بمقاس A4.</li>
					<li>تصميم تخيلي للأكياس.</li>
					<li>تصميم تخيلي للملصقات.</li>
					<li>تصميم تخيلي للوحة الداخلية.</li>
					<li>تصميم تخيلي لدفاتر اليوميات.</li>
					<li>تصميم تخيلي للأكواب.</li>
					<li>تصميم علاقات الأبواب - اسحب/ادفع.</li>
					<li>دليل شرح الهوية الرقمي (Brand Guidelines).</li>
					<br />
					<h3>البند الخامس - سياسة التعديل:</h3>
					<p>
						بعد عرض نموذج الهوية البصرية وتطبيقاتها على العميل للمرة الأولى يكون
						له الحق فى طلب تعديلات غير جوهرية على تصميم الهوية لثلاث مرات على
						الأكثر وكل تعديل بعدها يحتسب بقيمة 30% من إجمالي قيمة الخدمة للتعديل
						الواحد. لا تشمل الخدمة التعديل أو الإضافة على الهوية البصرية بعد
						تسليمها للعميل بشكل نهائي وفي حال الرغبة بإجراء تعديلات أو إضافات
						يتم طلبها بشكل مستقل واحتسابها بفاتورة مستقلة.
					</p>
				</div>
			</article>
			<div id="bg">
				<motion.div
					key="bg"
					initial={{ opacity: 0 }}
					transition={{ ease: "easeInOut", duration: 3 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className=" absolute -z-40 h-[65vh] w-full top-0 left-0 gda-mask"
				>
					<Image
						id="modal"
						src={serviceInfo.cover}
						alt="gda background image"
						quality={100}
						priority={true}
						fill
						style={{ objectFit: "cover" }}
					/>
				</motion.div>
				<motion.div
					key="bg-blurred"
					initial={{ opacity: 0 }}
					transition={{ ease: "easeInOut", duration: 3 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed -z-50 h-screen w-full top-0 left-0 bg-zinc-950"
				>
					<Image
						id="modal2"
						src={serviceInfo.cover}
						alt="gda blurred background image"
						quality={100}
						fill
						priority={true}
						style={{
							objectFit: "cover",
							filter: "blur(50px)",
							opacity: "0.4",
						}}
					/>
				</motion.div>
			</div>
		</div>
	);
}
