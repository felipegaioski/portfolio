"use client"
import Layout from "@/components/layout";
import Banner from "@/components/banner";
import { useLanguage } from "../contexts/language-context";
import SEO from "@/components/seo";
import ImageGrid from "@/components/image-grid";

export default function Home() {
	const { language } = useLanguage();

	return (
		<Layout>
			<SEO 
                pageTitle="Felipe Gaioski - Portfolio"
                pageDescription={ language === "en" ? "Felipe Gaioski - PhotographyPortfolio" : "Felipe Gaioski - Portfolio de fotografia" } 
            />
			<Banner />
			<div className="main-container">
                <div className="page-title my-8">
                    { language === "en" && <h2>Recent Work</h2> }
                    { language === "pt-br" && <h2>Mais Recentes</h2> }
                </div>
			</div>
			<ImageGrid recent={true} />
		</Layout>
	);
}
