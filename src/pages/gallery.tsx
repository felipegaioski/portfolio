import Collections from "@/components/collections";
import Layout from "@/components/layout";
import { useLanguage } from "../contexts/language-context";
import SEO from "@/components/seo";

export default function Gallery() {
    const { language } = useLanguage();

    return (
        <Layout>
            <SEO 
                pageTitle={ language === "en" ? "Gallery - Felipe Gaioski Portfolio" : "Galeria - Portfolio Felipe Gaioski" } 
                pageDescription={ language === "en" ? "Gallery" : "Galeria" } 
            />
            <Collections />
        </Layout>
    );
}