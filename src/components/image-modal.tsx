import React, { useState } from 'react';
import { Photo } from '../types/types';
import Image from 'next/image';

type PhotoModalProps = {
    image: Photo;
    onClose: () => void;
};


export default function ImageModal({ image, onClose }: PhotoModalProps) {

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 450);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const size = typeof window === 'undefined' ? 0 : window.innerWidth;
    let max_height;
    
    if (size > 1200) {
        max_height = 50;
    } else if (size > 1024) {
        max_height = 40;
    } else {
        max_height = 50;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" onClick={handleOverlayClick}>
            <div className={`bg-white p-6 rounded shadow-lg relative flex flex-col h-[90vh] max-w-[90vw] overflow-hidden ${isClosing ? 'fade-out' : 'fade-in'}`}>
                {/* Close Button */}
                <button onClick={handleClose} className="absolute top-2 right-4 text-black">✖</button>

                {/* Content Layout */}
                <div className="grid grid-cols-4 gap-8 flex-1 overflow-hidden">
                    {/* Image Container */}
                    <div className="col-span-3 flex justify-center items-center">
                        <Image
                            src={image.url}
                            width={image.width}
                            height={image.height} 
                            alt={image.collection.name} 
                            className="h-[83vh] w-auto object-contain"
                        />
                    </div>

                    <div>
                        <div className="photo-meta-background h-auto py-10 pl-5 pr-5 mt-2 rounded-xl overflow-auto photo-meta-modal flex flex-col gap-2">
                            <p className="flex items-center gap-2">
                                <span className="font-bold">Camera:</span> {image.camera?.name}
                            </p>
                            { image.lens ? <p className="flex items-center gap-2">
                                <span className="font-bold">Lens:</span> {image.lens?.name}
                            </p> : '' }
                            { image.iso ? <p className="flex items-center gap-2">
                                <span className="font-bold">Iso:</span> {image.iso?.name}
                            </p> : '' }
                            { image.aperture ? <p className="flex items-center gap-2">
                                <span className="font-bold">Aperture:</span> {image.aperture}
                            </p> : '' }
                            { image.shutter_speed ? <p className="flex items-center gap-2">
                                <span className="font-bold">Shutter Speed:</span> {image.shutter_speed}s
                            </p> : '' }
                        </div>
                        <div className='quality-disclaimer'>
                            <p>* Photos not displayed in their highest quality, for better website performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
