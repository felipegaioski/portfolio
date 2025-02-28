import Footer from "@/components/footer";
import Header from "@/components/header";
import MovingClouds from "./moving-clouds";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MovingClouds />
            {/* <div className="clouds-container">
                <div className="cloud cloud1"></div>
                <div className="cloud cloud2"></div>
                <div className="cloud cloud3"></div>
            </div> */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}