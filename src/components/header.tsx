import Link from "next/link";
import { FaGear } from "react-icons/fa6";
import SettingsModal from "./settings-modal";
import { useLanguage } from "../contexts/language-context";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();

    let home: string = language === 'en' ? 'Home' : 'Home';
    let gallery: string = language === 'en' ? 'Gallery' : 'Galeria';
    let about: string = language === 'en' ? 'About' : 'Sobre';
    let gear: string = language === 'en' ? 'Gear' : 'Equipamentos';
    
    return (
        <header className="main-container fade-in">
            <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">
                <h1 className="logo">Felipe Gaioski</h1>
            </Link>
            <nav>
                <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">{ home }</Link>
                <Link href="/gallery" className="text-center transition-all duration-300 hover:tracking-wider">{ gallery }</Link>
                <Link href="#" className="text-center transition-all duration-300 hover:tracking-wider">{ about }</Link>
                <Link href="/gear" className="text-center transition-all duration-300 hover:tracking-wider">{ gear }</Link>
                <button className="pl-5 text-center transition-all duration-300 hover:scale-110" onClick={() => { setIsVisible(!isVisible) }}>
                    <FaGear />
                </button>
            </nav>
            <AnimatePresence>
                {isVisible && <SettingsModal onClose={() => setIsVisible(false)} />}
            </AnimatePresence>
        </header>
    );
}
