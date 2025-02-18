import Link from "next/link";
import { FaGear } from "react-icons/fa6";
import { useState } from "react";
import SettingsModal from "./settings-modal";
import { useLanguage } from "../contexts/language-context";
import { useRouter } from "next/router";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();

    const router = useRouter();

    let home: string = '';
    let gallery: string = '';
    let about: string = '';
    let gear: string = '';

    if (language == 'en') {
        home = 'Home';
        gallery = 'Gallery';
        about = 'About';
        gear = 'Gear';
    }
    if (language == 'pt-br') {
        home = 'Home';
        gallery = 'Galeria';
        about = 'Sobre';
        gear = 'Equipamentos';
    }
    
    return (
        <header className="main-container fade-in">
            <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">
                <h1>Felipe Gaioski</h1>
            </Link>
            <nav>
                <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">{ home }</Link>
                <Link href="/gallery" className="text-center transition-all duration-300 hover:tracking-wider">{ gallery }</Link>
                <Link href="#" className="text-center transition-all duration-300 hover:tracking-wider">{ about }</Link>
                <Link href="/gear" className="text-center transition-all duration-300 hover:tracking-wider">{ gear }</Link>
                <button className="pl-5 text-center transition-all duration-300 hover:scale-110" onClick={() => setIsVisible(!isVisible)}>
                    <FaGear />
                </button>
            </nav>
            { isVisible && <SettingsModal /> }
        </header>
    );
}
