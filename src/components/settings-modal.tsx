"use client"
import { motion } from 'motion/react';
import { useLanguage } from "../contexts/language-context";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";
import { IoCloseSharp } from "react-icons/io5";

export default function SettingsModal({ onClose }: { onClose: () => void }) {
    const { language } = useLanguage();

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
                type: "spring",
                bounce: 0.3,
                duration: 0.5,
            }}
            className='settings'
        >
        <div>
            <div className='flex justify-between'>
                { language === "en" && <h2 className='text-2xl pb-2'>Settings</h2> }
                { language === "pt-br" && <h2 className='text-2xl pb-2'>Configurações</h2> }
                <IoCloseSharp className='cursor-pointer text-2xl' onClick={onClose}/>
            </div>
            <hr className='pb-5'/>
            <div>
                <LanguageSwitcher />
            </div>
            <hr className='py-2'/>
            <div>
                <ThemeSwitcher />
            </div>
        </div>
        </motion.div>
    );
};
