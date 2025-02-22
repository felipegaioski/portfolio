"use client"
import { useTheme } from "../contexts/theme-context";
import { useLanguage } from "../contexts/language-context";
import { motion } from 'motion/react';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        }
        if (theme === "dark") {
            setTheme("light");
        }
    }

    const { language } = useLanguage();

    return (
        <div>
            { language === "en" && <h6 className="pb-2">Theme</h6> }
            { language === "pt-br" && <h6 className="pb-2">Tema</h6> }
            <div className="flex w-full items-center">
                { language === "en" &&  <div className="w-1/4 flex justify-center">Light</div> }
                { language === "pt-br" &&  <div className="w-1/4 flex justify-center">Claro</div> }
                <div className="w-2/4 flex justify-center">
                    <button
                        style={{
                            // ...container,
                            justifyContent: "flex-" + (theme === "light" ? "start" : "end"),
                        }}
                        className="toggle-container"
                        onClick={toggleTheme}
                    >
                        <motion.div
                            // style={handle}
                            layout
                            transition={{
                                type: "spring",
                                bounce: 0.2,
                                visualDuration: 0.2,
                            }}
                            className="toggle-handle"
                        />
                    </button>
                </div>
                { language === "en" &&  <div className="w-1/4 flex justify-center">Dark</div> }
                { language === "pt-br" &&  <div className="w-1/4 flex justify-center">Escuro</div> }
            </div>
        </div>
    );
}

