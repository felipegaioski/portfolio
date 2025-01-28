import React from "react";

export default function Gallery() {
    const images = [
        {
            src: "https://i.postimg.cc/8CxvK8g3/IMG-6226-1.jpg",
            camera: "Canon EOS Rebel SL2",
            lens: "EF-S 18-55mm IS STM",
            iso: 400,
            aperture: "f/5.6",
            shutterSpeed: "1/320s",
        },
        {
            src: "https://i.postimg.cc/GhNKGDTb/IMG-6228.jpg",
            camera: "Canon EOS Rebel SL2",
            lens: "EF-S 18-55mm IS STM",
            iso: 800,
            aperture: "f/5.6",
            shutterSpeed: "1/500s",
        },
        {
            src: "https://i.postimg.cc/yxHZKFdy/IMG-5959-2.jpg",
            camera: "Canon EOS Rebel SL2",
            lens: "EF-S 18-55mm IS STM",
            iso: 200,
            aperture: "f/8.0",
            shutterSpeed: "1/20s",
        },
        {
            src: "https://i.postimg.cc/B6L2CS8R/IMG-5855.jpg",
            camera: "Canon EOS Rebel SL2",
            lens: "Sigma 70-300mm f4-5.6 dg macro",
            iso: 400,
            aperture: "f/4",
            shutterSpeed: "1/400s",
        },
        {
            src: "https://i.postimg.cc/3N8bR0f2/IMG-6143.jpg",
            camera: "Canon EOS Rebel SL2",
            lens: "Vivitar 28mm f2.5",
            iso: 400,
            aperture: "f/4",
            shutterSpeed: "1/100s",
        },
    ];

    return (
        <section className="py-6">
            <div className="main-container flex flex-wrap justify-center gap-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="photo-meta group relative overflow-hidden flex-1"
                        style={{
                            flexGrow: 1,
                            flexBasis: "calc(25% - 0.5rem)",
                            maxWidth: "calc(25% - 0.5rem)",
                        }}
                    >
                        <a href={image.src} target="_blank" rel="noopener noreferrer">
                            <img
                                src={image.src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm">
                                {image.camera}
                                <br />
                                {image.lens}
                                <br />
                                ISO {image.iso}
                                <br />
                                {image.aperture}
                                <br />
                                {image.shutterSpeed}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
