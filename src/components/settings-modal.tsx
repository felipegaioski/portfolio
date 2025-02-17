"use client"
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from "../contexts/language-context";
import LanguageSwitcher from "./language-switcher";

export default function SettingsModal() {
    const { language } = useLanguage();

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.5,
                }}
                className='settings'
            >
                { language === "en" && <h2 className='text-2xl pb-2'>Settings</h2> }
                { language === "pt-br" && <h2 className='text-2xl pb-2'>Configurações</h2> }
                <hr className='pb-5'/>
                <div>
                    <LanguageSwitcher />
                </div>
                {/* Repeat the toggle buttons for other settings */}
            </motion.div>
        </AnimatePresence>
    );
};
