"use client"
import { motion, AnimatePresence } from 'motion/react';
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../contexts/language-context";

const gear = [
    {
        category_en: "Cameras",
        category_ptbr: "Câmeras",
        items: [
            {
                name: "Canon EOS Rebel SL2",
                en: "It's been my companion since 2020, and I just love it. As many would say, the best camera is the one you have.",
                ptbr: "Eu tenho como companheira desde 2020, e eu amo ela. Como muitos dizem, a melhor câmera é a que você tem.",
                image: "https://i.postimg.cc/pLCqjDxD/sl2.png",
            },
            {
                name: "Praktica MTL3",
                en: "My father bought this camera back in 1982 because he wasn't satisfied with his Yashica point-and-shoot. I can say it was the best decision he could've done. He used it until the early 2000's. In 2023 I picked it up from the shelf to begin in film photography.",
                ptbr: "Meu pai comprou esta câmera em 1982 porque não estava satisfeito com sua Yashica point-and-shoot. Posso dizer que foi a melhor decisão que ele poderia ter tomado. Ele a usou até o início dos anos 2000. Em 2023, eu a peguei da prateleira para começar na fotografia de filme.",
                image: "https://i.postimg.cc/J4bT1f2Y/praktica.png",
            },
            {
                name: "Canon EOS 5000",
                en: "Kindly lent to me. It's a nice modern film camera. Not so many controls available, but does a great job!",
                ptbr: "Gentilmente emprestada para mim. É uma boa câmera de filme moderna. Não tem tantos controles disponíveis, mas faz um bom trabalho!",
                image: "https://i.postimg.cc/fRNrmzdh/eos5000.png",
            },
            {
                name: "Olympus Trip 35",
                en: "The classic of classics.",
                ptbr: "A clássica das clássicas.",
                image: "https://i.postimg.cc/Lssv3n6G/trip35.png",
            },
            {
                name: "Olympus Trip MD3",
                en: "Lent to me as well. Had to fix a few things, but works nicely now. A simple, but fun to use point-and-shoot.",
                ptbr: "Emprestada para mim também. Precisava corrigir algumas coisas, mas funciona bem agora. Uma point-and-shoot simples, mas divertida para usar.",
                image: "https://i.postimg.cc/LXnC2hcj/md3.png",
            },
            {
                name: "Kapsa Pinta Vermelha",
                en: "Translates to 'Kapsa Red Dot'. This is a classic brazilian brownie waist level camera from the 1950's. Kindly gifted to me by my grandmother.",
                ptbr: "Essa é uma classica brownie de cintura da minha avó daqui aos 50 anos. Gentilmente presenteada para mim pela minha avó.",
                image: "https://i.postimg.cc/0QFtQPvF/kapsa.png",
            },
        ],
    },
    {
        category_en: "Lenses",
        category_ptbr: "Lentes",
        items: [
            {
                name: "Canon EF-S 18-55mm f/4-5.6 IS STM",
                en: "Yep. A kit lens. A lens that I learned to love. It's nowhere close to a high-end lens, but has made me grow as a photographer. If you don't like yours, throw a mist filter on it. Trust me.",
                ptbr: "Sim. A lente do kit. Uma lente que aprendi a gostar. Não chega nem perto de uma lente de ponta, mas me fez crescer como fotógrafo. Se você não gosta da sua, coloque um filtro de névoa nela. Confie em mim.",
                image: "https://i.postimg.cc/q7BDD1Qb/1855.png",
            },
            {
                name: "Canon 50mm f/1.8 EF II",
                en: "The nifty-fifty.",
                ptbr: "A famosa nifty-fifty",
                image: "https://i.postimg.cc/dtdfhkLB/50.png",
            },
            {
                name: "Vivitar 28mm f/2.5 Auto Wide Angle",
                en: "This M42 lens surprised me for how good it is for the price (it's ridiculously cheap). Great colors, great bokeh, great image quality. A nice piece of glass.",
                ptbr: "Essa lente M42 me surpreendeu por como boa ela é para o preço (ele é ridiculamente barato). Boas cores, boas bokeh, boa qualidade de imagem. Uma boa pecinha de vidro.",
                image: "https://i.postimg.cc/jqB9qQd2/vivitar.png",
            },
            {
                name: "Takumar 100mm f/4 Super-Multi-Coated Macro",
                en: "Another cheap M42 Lens that really impressed me. Super sharp for a vintage lens.",
                ptbr: "Outra lente M42 que realmente impressionou-me. Super espelho para um lens vintage.",
                image: "https://i.postimg.cc/g2mgrM9z/takumar.png",
            },
            {
                name: "Pentacon 50mm f/1.8",
                en: "This is the kit lens for the Praktica MTL3. Incredible colors and bokeh.",
                ptbr: "Essa é a lente do kit para a Praktica MTL3. Boas cores e bokeh.",
                image: "https://i.postimg.cc/dQZHfkmY/pentacon.png",
            },
            {
                name: "Sigma 70-300mm f/4-5.6 DG Macro",
                en: "Nice long range lens with incredible macro capabilities.",
                ptbr: "Uma lente de longo alcance com incríveis capacidades macro.",
                image: "https://i.postimg.cc/d3C5Zpt1/sigma.png",
            },
        ],
    }
];

const Gear = () => {
    const [selectedTab, setSelectedTab] = useState(gear[0]);
    const { language } = useLanguage();

    return (
        <div>
            <div className="main-container">
                <div className="page-title mt-8">
                    { language === "en" && <h2>Gear</h2> }
                    { language === "pt-br" && <h2>Equipamentos</h2> }
                </div>
                <div className="my-8 pb-2 gear-container shadow-xl">
                    <nav className="gear-nav">
                        <ul style={tabsContainer}>
                            {gear.map((item) => (
                                <motion.li
                                    key={ language === "en" ? item.category_en : item.category_ptbr }
                                    initial={false}
                                    animate={{
                                        backgroundColor:
                                            item === selectedTab ? "#eee" : "#eee0",
                                    }}
                                    className="tab"
                                    onClick={() => setSelectedTab(item)}
                                >
                                    {`${ language === "en" ? item.category_en : item.category_ptbr }`}
                                    {item === selectedTab ? (
                                        <motion.div
                                            style={underline}
                                            layoutId="underline"
                                            id="underline"
                                        />
                                    ) : null}
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                    <main className="d-flex">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab ? selectedTab.category_en : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={icon}
                            >
                                {selectedTab.items.map((item) => (
                                    <div key={item.name} className="m-4 grid gap-20 mt-10 mb-20 sm:grid-cols-[1fr_2fr] grid-cols-1">
                                        <div className="flex justify-center">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={250}
                                                height={250}
                                                className="png-shadow"
                                            />
                                        </div>
                                        <div className="gear-text flex flex-col justify-center">
                                            <h3 className="font-bold gear-title">{item.name}</h3>
                                            <p className="gear-description">{ language === "en" ? item.en : item.ptbr }</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </div>
    );
};

const tabsStyles: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontWeight: 500,
    fontSize: 14,
}

const tabsContainer: React.CSSProperties = {
    ...tabsStyles,
    display: "flex",
    width: "100%",
    padding: "1vh",
    gap: "0.5vh"
}

const underline: React.CSSProperties = {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--primary)",
}

const icon: React.CSSProperties = {
    fontSize: 128,
}

export default Gear;
