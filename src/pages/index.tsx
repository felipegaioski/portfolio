import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout";
import ImageGrid from "@/components/image-grid";
import Banner from "@/components/banner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<Layout>
			<Banner />
			<div style={{ height: "100vh" }}>

			</div>
		</Layout>
	);
}
