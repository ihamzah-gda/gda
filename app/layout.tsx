import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "GDA | %s",
		default: "GDA - حلول تسويقية وتقنية مبتكرة",
	},
	description: "تصميم وهويات وشعارات ومواقع الكترونية واكثر",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ar" dir="rtl">
			<Head>
				<link rel="icon" href="" />

				<meta
					property="og:image"
					content="https://graydesign-e4d3a.web.app/gda-bg.webp"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
