import { motion } from 'motion/react';
import { useLanguage } from "../contexts/language-context";
import Image from "next/image";

export default function About() {
    const { language } = useLanguage();

    const pt_text = `Sou Felipe Gaioski, e fotografia foi minha forma de capturar a poesia do mundo desde 2018. O que comecei como curiosidade se 
                    tornou uma busca emocional—congelando momentos flutuantes, jogando com a luz, e preservando os contos de amor nas cada um dos quadros. 
                    Por enquanto, isso é uma paixão, um hobby, mas cada clique da câmera me leva mais perto de algo profundo.`;

    const en_text = `My name is Felipe Gaioski, and photography has been my way of capturing the poetry of the 
                    world since 2018. What started as curiosity turned into an emotional pursuit—freezing fleeting moments, 
                    playing with light, and preserving the unspoken stories in every frame. For now, it’s a passion, a hobby, but each click of the 
                    shutter feels like a step closer to something profound.`;

    return (
        <section className='main-container p-8 mx-auto'>
            <motion.section
                className='flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-10 my-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className='md:w-1/2 flex justify-center align-middle items-center my-auto'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className='page-title'>
                    <motion.h2
                        className='mb-8'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {language === 'en' ? 'about.' : 'Sobre'}
                    </motion.h2>
                    <p className='text-lg'>
                        {language === 'en' ? en_text : pt_text}
                    </p>
                    </div>
                </motion.div>
                <div className="md:w-1/2 flex justify-center">
                    <motion.div
                        className='flex justify-center rounded-full overflow-hidden max-w-[300px] md:max-w-[500px] w-full'
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <Image
                            src='https://i.postimg.cc/TYmmh5Bb/about-1-2.png'
                            alt='Felipe Gaioski'
                            className='shadow-lg object-cover'
                            width={500}
                            height={500}
                        />
                    </motion.div>
                </div>

            </motion.section>
        </section>
    );
}
