import React, { useEffect, useState, useRef } from 'react';
import { CSSProperties } from 'react';
import { Image } from '../types/types';
import ImageModal from "./image-modal";

export default function Gallery() {
    const [images, setImages] = useState<Image[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [visibleImages, setVisibleImages] = useState(new Set<number>()); // Track visible images

    useEffect(() => {
        fetch('/api/images')
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setImages(data.images);
                }
            })
            .catch(() => setError('Erro ao carregar imagens'));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleImages((prev) => {
                    const newVisible = new Set(prev);
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            newVisible.add(Number(entry.target.getAttribute("data-index")));
                        }
                    });
                    return newVisible;
                });
            },
            { threshold: 0.3 }
        );

        document.querySelectorAll(".gallery-item").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [images]);

    if (error) return <div>Erro: {error}</div>;

    const size = typeof window === 'undefined' ? 0 : window.innerWidth;
    let remValue = size > 1200 ? '25rem' : size > 1024 ? '20rem' : '15rem';

    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const openModal = (image: Image) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

    return (
        <section className="py-6">
            <div className="px-2">
                <div className="section-title main-container fade-in">
                    <h2 className="title-text">Taboleiro</h2>
                    <p className="sub-text">Taboleiro is a region located in the countryside of Paraná, Brazil. It is known for its calm and peaceful atmosphere, with ranches and beautiful views of nature.</p>
                </div>
                <div className="justified-grid-gallery">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group gallery-item"
                            data-index={index}
                            style={{ '--width': image.width, '--height': image.height, '--min-height': remValue } as CSSProperties}
                        >
                            <div
                                className={`cursor-pointer transition-opacity duration-500 ${
                                    visibleImages.has(index) ? "slide-up opacity-100" : "opacity-0"
                                }`}
                                onClick={() => openModal(image)}
                            >
                                <img
                                    src={image.url}
                                    alt={`Gallery image ${index + 1}`}
                                    className="transition-transform duration-300 cursor-pointer object-cover"
                                />
                            </div>
                            <div onClick={() => openModal(image)} className="cursor-pointer photo-meta absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm">
                                    {image.camera?.name}
                                    <br />
                                    {image.lens?.name}
                                    {image.lens?.name ? <br /> : null}
                                    {image.iso?.name ? `ISO: ${image.iso.name}` : null}
                                    {image.iso?.name ? <br /> : null}
                                    {image.aperture ? `${image.aperture}` : null}
                                    {image.aperture ? <br /> : null}
                                    {image.shutter_speed}s
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
        </section>
    );
}
