"use client"
import Layout from "@/components/layout";
import Banner from "@/components/banner";
import { useLanguage } from "../contexts/language-context";
import { useTheme } from "../contexts/theme-context";
import SEO from "@/components/seo";

export default function Home() {
	const { language } = useLanguage();
	const { theme } = useTheme();

	return (
		<Layout>
			<SEO 
                pageTitle="Felipe Gaioski - Portfolio"
                pageDescription={ language === "en" ? "Felipe Gaioski - PhotographyPortfolio" : "Felipe Gaioski - Portfolio de fotografia" } 
            />
			<Banner />
			<div style={{ height: "100vh" }}>

			</div>
		</Layout>
	);
}
