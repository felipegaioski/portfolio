import Link from "next/link";
import { FaGear } from "react-icons/fa6";
import { useState } from "react";
import SettingsModal from "./settings-modal";
import { useLanguage } from "../contexts/language-context";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();
    
    return (
        <header className="main-container fade-in bg-white">
            <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">
                <h1>Felipe Gaioski</h1>
            </Link>
            { language == 'en' && 
            <nav>
                <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">Home</Link>
                <Link href="/gallery" className="text-center transition-all duration-300 hover:tracking-wider">Gallery</Link>
                <Link href="#" className="text-center transition-all duration-300 hover:tracking-wider">About</Link>
                <Link href="/gear" className="text-center transition-all duration-300 hover:tracking-wider">Gear</Link>
                <button className="pl-5 text-center transition-all duration-300 hover:scale-110" onClick={() => setIsVisible(!isVisible)}>
                    <FaGear />
                </button>
            </nav> }
            { language == 'pt-br' && 
            <nav>
                <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">Home</Link>
                <Link href="/gallery" className="text-center transition-all duration-300 hover:tracking-wider">Galeria</Link>
                <Link href="#" className="text-center transition-all duration-300 hover:tracking-wider">Sobre</Link>
                <Link href="/gear" className="text-center transition-all duration-300 hover:tracking-wider">Equipamentos</Link>
                <button className="pl-5 text-center transition-all duration-300 hover:scale-110" onClick={() => setIsVisible(!isVisible)}>
                    <FaGear />
                </button>
            </nav> }
            
            { isVisible && <SettingsModal />}
        </header>
    );
}
