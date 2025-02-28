import { motion } from "framer-motion";

const cloudImages = [
    "https://i.postimg.cc/qq0vGHq1/clouds1.png",
    "https://i.postimg.cc/j5yjNSxW/clouds2.png",
    "https://i.postimg.cc/SKYgKxLt/clouds5.png",
    "https://i.postimg.cc/y8sq28W0/clouds6.png",
    "https://i.postimg.cc/4xPCGRhq/clouds7.png",
];

export default function MovingClouds() {
    const cloudVariants1 = {
        animate: {
            y: ["0px", "20px", "0px"],
            x: ["0px", "15px", "0px"],
            transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        },
    };

    const cloudVariants2 = {
        animate: {
            y: ["0px", "25px", "0px"],
            x: ["0px", "12px", "0px"],
            transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        },
    };

    return (
        <div className="fixed w-full h-screen top-50 left-0 overflow-hidden pointer-events-none z-[-1]">
            {cloudImages.map((image, index) => {
                const randomX = Math.random() * 90 + "%"; // Spread clouds more evenly
                const randomY = Math.random() * 90 + "%";
                const randomSize = Math.random() * 300 + 600 + "px";
                const randomVariant = index % 2 === 0 ? cloudVariants1 : cloudVariants2; // Alternate between animations

                return (
                    <motion.div
                        key={index}
                        className="absolute bg-contain bg-no-repeat"
                        style={{
                            backgroundImage: `url(${image})`,
                            width: randomSize,
                            height: "512px",
                            top: randomY,
                            left: randomX,
                        }}
                        variants={randomVariant}
                        animate="animate"
                    />
                );
            })}
        </div>
    );
}