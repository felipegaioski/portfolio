"use client"
import { useLanguage } from "../contexts/language-context";
import { motion } from 'motion/react';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    function toggleLanguage() {
        if (language === "en") {
            setLanguage("pt-br");
        }
        if (language === "pt-br") {
            setLanguage("en");
        }
    }

    const container = {
        width: 80,
        height: 40,
        backgroundColor: "var(--toggle-background)",
        borderRadius: 50,
        cursor: "pointer",
        display: "flex",
        padding: 5
    }
    
    const handle = {
        width: 30,
        height: 30,
        backgroundColor: "var(--toggle-handle)",
        borderRadius: "50%",
    }

    return (
        <div>
            { language === "en" && <h6 className="pb-2">Language</h6> }
            { language === "pt-br" && <h6 className="pb-2">Idioma</h6> }
            <div className="flex w-full">
                <div className="w-1/4 flex justify-center">En</div>
                <div className="w-2/4 flex justify-center">
                    <button
                        style={{
                            ...container,
                            justifyContent: "flex-" + (language === "en" ? "start" : "end"),
                        }}
                        onClick={toggleLanguage}
                    >
                        <motion.div
                            style={handle}
                            layout
                            transition={{
                                type: "spring",
                                bounce: 0.2,
                                visualDuration: 0.2,
                            }}
                        />
                    </button>
                </div>
                <div className="w-1/4 flex justify-center">
                Pt-Br
                </div>
            </div>
        </div>
    );
}
