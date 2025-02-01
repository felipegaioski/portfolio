import { useEffect, useState } from "react";

export default function Banner() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY * 0.8);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

	return (
        <section className="hero" style={{ backgroundPosition: `center calc(30% + ${offset}px)` }}>
            <div className="hero-content fade-in">
                <h2>Portfolio</h2>
                <p>Explore the beauty of the world through my lens.</p>
            </div>
        </section>
	);
}
