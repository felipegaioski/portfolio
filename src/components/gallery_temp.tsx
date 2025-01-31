import React, { useEffect, useState } from 'react';
import { Image } from '../types/types';

export default function Gallery() {
    const [images, setImages] = useState<Image[]>([]);
    const [error, setError] = useState<string | null>(null);

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

    if (error) return <div>Erro: {error}</div>;

    return (
        <section className="py-6">
            <div className="main-container flex flex-wrap justify-center gap-2">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="photo-meta group relative overflow-hidden flex-1"
                        style={{
                            flexGrow: 1,
                            flexBasis: 'calc(25% - 0.5rem)',
                            maxWidth: 'calc(25% - 0.5rem)',
                        }}
                    >
                        <a href={image.url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={image.url}
                                alt={`Image from collection ${image.collection.name}`}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm">
                                {image.camera?.name && `Camera: ${image.camera.name}`}<br />
                                {image.lens?.name && `Lens: ${image.lens.name}`}<br />
                                {image.iso?.name && `ISO: ${image.iso.name}`}<br />
                                {image.aperture && `Aperture: ${image.aperture}`}<br />
                                {image.shutter_speed && `Shutter Speed: ${image.shutter_speed}`}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
