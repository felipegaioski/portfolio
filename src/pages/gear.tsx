import Gear from "@/components/gear";
import Layout from "@/components/layout";
import { useLanguage } from "../contexts/language-context";
import SEO from "@/components/seo";

export default function Gallery() {
    const { language } = useLanguage();
    return (
        <Layout>
            <SEO 
                pageTitle={ language === "en" ? "Gear - Felipe Gaioski Portfolio" : "Equipamentos - Portfolio Felipe Gaioski" } 
                pageDescription={ language === "en" ? "My gear" : "Meus equipamentos" } 
            />
            <Gear />
        </Layout>
    );
}