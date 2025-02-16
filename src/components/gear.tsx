"use client"
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"
import Image from "next/image";
import { useState } from "react";

const gear = [
    {
        category: "Cameras",
        items: [
            {
                name: "Canon EOS Rebel SL2",
                description: "It's been my companion since 2020, and I just love it. As many would say, the best camera is the one you have.",
                image: "/images/sl2.png",
            },
            {
                name: "Praktica MTL3",
                description: "My father bought this camera back in 1982 because he wasn't satisfied with his Yashica point-and-shoot. I can say it was the best decision he could've done. He used it until the early 2000's. In 2023 I picked it up from the shelf to begin in film photography.",
                image: "/images/praktica.png",
            },
            {
                name: "Canon EOS 5000",
                description: "Kindly lent to me. It's a nice modern film camera. Not so many controls available, but does a great job!",
                image: "/images/eos5000.png",
            },
            {
                name: "Olympus Trip 35",
                description: "The classic of classics.",
                image: "/images/trip35.png",
            },
            {
                name: "Olympus Trip MD3",
                description: "Lent to me as well. Had to fix a few things, but works nicely now. A simple, but fun to use point-and-shoot.",
                image: "/images/md3.png",
            },
            {
                name: "Kapsa Pinta Vermelha",
                description: "Translates to 'Kapsa Red Dot'. This is a classic brazilian brownie waist level camera from the 1950's. Kindly gifted to me by my grandmother.",
                image: "/images/kapsa.png",
            },
        ],
    },
    {
        category: "Lenses",
        items: [
            {
                name: "Canon EF-S 18-55mm f/4-5.6 IS STM",
                description: "Yep. A kit lens. A lens that I learned to love. It's nowhere close to a high-end lens, but has made me grow as a photographer. If you don't like yours, throw a mist filter on it. Trust me.",
                image: "/images/1855.png",
            },
            {
                name: "Canon 50mm f/1.8 EF II",
                description: "The nifty-fifty.",
                image: "/images/50.png",
            },
            {
                name: "Vivitar 28mm f/2.5 Auto Wide Angle",
                description: "This M42 lens surprised me for how good it is for the price (it's ridiculously cheap). Great colors, great bokeh, great image quality. A nice piece of glass.",
                image: "/images/vivitar.png",
            },
            {
                name: "Takumar 100mm f/4 Super-Multi-Coated Macro",
                description: "Another cheap M42 Lens that really impressed me. Super sharp for a vintage lens.",
                image: "/images/takumar.png",
            },
            {
                name: "Pentacon 50mm f/1.8",
                description: "This is the kit lens for the Praktica MTL3. Incredible colors and bokeh.",
                image: "/images/pentacon.png",
            },
            {
                name: "Sigma 70-300mm f/4-5.6 DG Macro",
                description: "Nice long range lens with incredible macro capabilities.",
                image: "/images/sigma.png",
            },
        ],
    }
];

const Gear = () => {
    const [selectedTab, setSelectedTab] = useState(gear[0]);

    return (
        <div className="main-container">
            <div className="page-title mt-8">
                <h2>Gear</h2>
            </div>
            <div className="my-8 pb-4 gear-container shadow-xl">
                <nav className="gear-nav">
                    <ul style={tabsContainer}>
                        {gear.map((item) => (
                            <motion.li
                                key={item.category}
                                initial={false}
                                animate={{
                                    backgroundColor:
                                        item === selectedTab ? "#eee" : "#eee0",
                                }}
                                className="tab"
                                onClick={() => setSelectedTab(item)}
                            >
                                {`${item.category}`}
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
                            key={selectedTab ? selectedTab.category : "empty"}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={icon}
                        >
                            {selectedTab.items.map((item) => (
                                <div key={item.name} className="m-4 grid grid-cols-[1fr_2fr] gap-20 mt-10 mb-20">
                                    <div className="flex justify-center">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={250}
                                            height={250}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-bold gear-title">{item.name}</h3>
                                        <p className="gear-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </main>
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
    height: 2,
    background: "var(--primary)",
}

const icon: React.CSSProperties = {
    fontSize: 128,
}

export default Gear;
