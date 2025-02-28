import Link from "next/link";
import { FaGear } from "react-icons/fa6";
import SettingsModal from "./settings-modal";
import Settings from "./settings";
import { useLanguage } from "../contexts/language-context";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    const [showSettings, setShowSettings] = useState(false);
    const [showSettingsMobile, setShowSettingsMobile] = useState(false);
    const [showMobileMenu, setMobileMenu] = useState(false);
    const { language } = useLanguage();

    const home = language === 'en' ? 'Home' : 'Home';
    const gallery = language === 'en' ? 'Gallery' : 'Galeria';
    const about = language === 'en' ? 'About' : 'Sobre';
    const gear = language === 'en' ? 'Gear' : 'Equipamentos';

    return (
        <>
            <header className="main-container fade-in">
                <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">
                    <h1 className="logo">Felipe Gaioski</h1>
                </Link>
                <nav className="header-nav">
                    <Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">{ home }</Link>
                    <Link href="/gallery" className="text-center transition-all duration-300 hover:tracking-wider">{ gallery }</Link>
                    <Link href="/about" className="text-center transition-all duration-300 hover:tracking-wider">{ about }</Link>
                    <Link href="/gear" className="text-center transition-all duration-300 hover:tracking-wider">{ gear }</Link>
                    <button className="pl-5 text-center transition-all duration-300 hover:scale-110" onClick={() => setShowSettings(!showSettings)}>
                        <FaGear />
                    </button>
                </nav>
                <div className="mobile-menu">
                    <button onClick={() => { setMobileMenu(!showMobileMenu); setShowSettingsMobile(!showSettingsMobile)}}>
                    <AnimatePresence>
                        <motion.div animate={{rotateZ: showMobileMenu ? 90 : 0}}>
                            <GiHamburgerMenu className="text-2xl" style={{ color: showMobileMenu ? "var(--fifth)" : "inherit" }} />
                        </motion.div>
                    </AnimatePresence>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {showMobileMenu && (
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.5, type:"spring", bounce: 0, ease: [0, 0.71, 0.2, 1.01] }}
                        className="mobile-menu-list"
                        style={{ originY: 0 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="border-r border-gray-400 dark:border-gray-600">
                                <li><Link href="/" className="text-center transition-all duration-300 hover:tracking-wider">{ home }</Link></li>
                                <li><Link href="/gallery" className="text-center transition-all duration-300 hover:tracking-wider">{ gallery }</Link></li>
                                <li><Link href="#" className="text-center transition-all duration-300 hover:tracking-wider">{ about }</Link></li>
                                <li><Link href="/gear" className="text-center transition-all duration-300 hover:tracking-wider">{ gear }</Link></li>
                                {/* <li onClick={() => setShowSettings(!showSettings)}>{ settings }</li> */}
                            </ul>
                            { showSettingsMobile && <Settings /> }
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
            </AnimatePresence>
        </>
    );
}

