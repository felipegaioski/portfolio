import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout";
import Banner from "@/components/banner";

export default function Home() {
	return (
		<Layout>
			<Banner />
			<div style={{ height: "100vh" }}>

			</div>
		</Layout>
	);
}
