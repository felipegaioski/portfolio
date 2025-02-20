"use client"
import { useLanguage } from "../contexts/language-context";
import { motion } from 'motion/react';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    // function toggleLanguage() {
    //     if (language === "en") {
    //         setLanguage("pt-br");
    //     }
    //     if (language === "pt-br") {
    //         setLanguage("en");
    //     }
    // }

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            { language === "en" && <h6 className="pb-2">Language</h6> }
            { language === "pt-br" && <h6 className="pb-2">Idioma</h6> }

            <motion.div
                className="flex w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-2/4 flex justify-center" style={{ color: language === "en" ? "var(--fifth)" : "var(--greyed)"}}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setLanguage("en")}
                    >
                        English
                    </motion.button>
                </div>
                <div className="w-2/4 flex justify-center" style={{ color: language === "pt-br" ? "var(--fifth)" : "var(--greyed)"}}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setLanguage("pt-br")}
                    >
                        Portuguese
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}
