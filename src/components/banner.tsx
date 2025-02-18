import { useEffect, useState } from "react";

export default function Banner() {
    const [offset, setOffset] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Parallax scrolling effect
        const handleScroll = () => setOffset(window.scrollY * 0.8);

        // Parallax mouse effect
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 30; // Moves max 30px
            const y = (e.clientY / innerHeight - 0.5) * 30;
            setMousePos({ x, y });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="hero" style={{ backgroundPosition: `center calc(30% + ${offset}px)` }}>
            <div className="hero-content fade-in">
                <h2 style={{
                    transform: `translate(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)`, // Moves in opposite direction
                    transition: "transform 0.1s ease-out",
                }}>Photography Portfolio</h2>
                <p style={{
                    transform: `translate(${-mousePos.x * 1}px, ${-mousePos.y * 1}px)`, // Moves in opposite direction
                    transition: "transform 0.1s ease-out",
                }}>Scenes worth remembering</p>
            </div>
        </section>
    );
}
