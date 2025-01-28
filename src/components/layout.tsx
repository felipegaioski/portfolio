import Footer from "@/components/footer";
import Head from "@/components/head";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}