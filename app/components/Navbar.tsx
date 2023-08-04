import Link from "next/link";

import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="z-50 fixed top-0 left-0 flex w-full items-end justify-center h-auto bg-gradient-to-b from-zinc-900">
			<div className="w-full max-w-[1080px] items-center justify-between flex mt-4 mx-3 p-2 gda-container gda-blur shadow-lg dark:shadow-lg">
				<Link
					className=""
					href="/"
					target="_self"
					rel="nooperner noreferrer"
					passHref
				>
					<div
						data-te-ripple-init
						data-te-ripple-color="light"
						className="flex flex-row gap-2 text-white font-medium font-Skolar  py-2 px-3 gda-container gda-hover gda-blur"
					>
						<Image
							unoptimized
							src="/gda-logo-w.svg"
							alt="GrayDesign Logo"
							height={15}
							width={28}
							className=""
						/>
						<span>GDA Saudi Arabia</span>
					</div>
				</Link>
				<div className="z-50">
					<button className="flex flex-row items-center gap-2 text-white font-medium font-Skolar cursor-pointer active:border-none py-2 px-3 gda-container gda-hover gda-blur">
						القائمة
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
						</span>
					</button>
				</div>
			</div>
		</nav>
	);
}
