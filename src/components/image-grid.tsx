import React, { useEffect, useState} from 'react';
import { CSSProperties } from 'react';
import { Photo } from '../types/types';
import Image from 'next/image';
import ImageModal from "./image-modal";

type ImageGridProps = 
  | { collectionId: number; recent?: false }
  | { collectionId?: never; recent: boolean };

export default function ImageGrid({ collectionId, recent }: ImageGridProps) {
    const [images, setImages] = useState<Photo[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
    const [visibleImages, setVisibleImages] = useState(new Set<number>());
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (collectionId) {
            fetch(`/api/images/${collectionId}`)
                .then((res) => res.json())
                .then((data) => {                
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setImages(data.images);
                    }
                })
                .catch(() => setError('Erro ao carregar imagens'))
                .finally(() => setIsLoading(false));
        }
        if (recent) {
            fetch(`/api/images/recent`)
                .then((res) => res.json())
                .then((data) => {                
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setImages(data.images);
                    }
                })
                .catch(() => setError('Erro ao carregar imagens'))
                .finally(() => setIsLoading(false));
        }
    }, [collectionId, recent]);

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
    const remValue = size > 1200 ? '25rem' : size > 1024 ? '20rem' : '15rem';

    const openModal = (image: Photo) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

    return (
        <section className='mb-8'>
            <div className="px-2">
                { !isLoading && <div className="justified-grid-gallery">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group gallery-item relative"
                            data-index={index}
                            style={{ '--width': image.width, '--height': image.height, '--min-height': remValue } as CSSProperties}
                        >
                            <div
                                className={`cursor-pointer transition-opacity duration-500 ${
                                    visibleImages.has(index) ? "slide-up opacity-100" : "opacity-0"
                                }`}
                                onClick={() => openModal(image)}
                            >
                                <Image
                                    src={image.url}
                                    width={image.width}
                                    height={image.height}      
                                    alt={`Gallery image ${index + 1}`}
                                    className="transition-transform duration-300 cursor-pointer object-cover"
                                />
                            </div>
                            <div onClick={() => openModal(image)} className="cursor-pointer photo-meta absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm">
                                    {image.camera?.short ?? image.camera?.name}
                                    <br />
                                    {image.lens?.short ?? image.lens?.name}
                                    {image.lens?.name ? <br /> : null}
                                    {image.iso?.name ? `ISO: ${image.iso.name}` : null}
                                    {image.iso?.name ? <br /> : null}
                                    {image.aperture ? `${image.aperture}` : null}
                                    {image.aperture ? <br /> : null}
                                    {image.shutter_speed ? `${image.shutter_speed}s` : null}
                                </p>
                            </div>
                        </div>
                    ))}
                </div> }
            </div>
            {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
        </section>
    );
}