import Layout from "@/components/layout";
import { useLanguage } from "../contexts/language-context";
import SEO from "@/components/seo";
import About from "@/components/about";

export default function Gallery() {
    const { language } = useLanguage();

    return (
        <Layout>
            <SEO 
                pageTitle={ language === "en" ? "About" : "Sobre" } 
                pageDescription={ language === "en" ? "About me" : "Sobre mim" } 
            />
            <About />
        </Layout>
    );
}