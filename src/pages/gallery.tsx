import Collections from "@/components/collections";
import Layout from "@/components/layout";
import { useLanguage } from "../contexts/language-context";
import SEO from "@/components/seo";

export default function Gallery() {
    const { language } = useLanguage();

    return (
        <Layout>
            <SEO 
                pageTitle={ language === "en" ? "Collections - Felipe Gaioski Portfolio" : "Coleções - Portfolio Felipe Gaioski" } 
                pageDescription={ language === "en" ? "Collections" : "Coleções" } 
            />
            <Collections />
        </Layout>
    );
}