import React, { useState } from 'react';
import { Photo } from '../types/types';
import Image from 'next/image';
import { useTheme } from "../contexts/theme-context";

type PhotoModalProps = {
    image: Photo;
    onClose: () => void;
};

export default function ImageModal({ image, onClose }: PhotoModalProps) {
    const { theme } = useTheme();
    
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

    // const size = typeof window === 'undefined' ? 0 : window.innerWidth;
    // let max_height;
    
    // if (size > 1200) {
    //     max_height = 50;
    // } else if (size > 1024) {
    //     max_height = 40;
    // } else {
    //     max_height = 50;
    // }

    return (
        <div 
            className="image-modal-container fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" 
            onClick={handleOverlayClick}
        >
            <div 
                className={`image-modal p-4 rounded shadow-lg relative flex flex-col max-w-[80vw] overflow-hidden ${isClosing ? 'fade-out' : 'fade-in'}`} 
                style={{ maxHeight: '90vh' }}
            >
                {/* Close Button */}
                <div className='flex justify-end top-0'>
                    <button onClick={handleClose} className="top-2 right-4 text-xl z-50">✖</button>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 flex-1 overflow-hidden items-center">
                    {/* Image Container */}
                    <div className="col-span-3 w-full flex justify-center items-center">
                        { theme === "dark" && <div className="absolute w-[60%] h-[80%] bg-white opacity-20 rounded-full blur-3xl ml-[20%]"></div> }
                        { theme === "light" && <div className="absolute w-[60%] h-[80%] opacity-20 rounded-full blur-3xl ml-[20%]" style={{ backgroundColor: 'var(--primary)' }}> </div> }
                        <Image
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            alt={image.collection.name}
                            className="max-h-[90vh] w-auto object-contain z-10"
                        />
                    </div>
                    
                    {/* Metadata Section */}
                    <div className='h-full flex justify-end flex-col'>
                        <div className="w-full sm:col-span-1 flex flex-col gap-1 bg-opacity-90 px-4 rounded-xl overflow-auto text-sm sm:text-base">
                            <p className="flex items-center gap-2">
                                <span className="font-bold">Camera:</span> {image.camera?.short}
                            </p>
                            {image.lens && <p className="flex items-center gap-2">
                                <span className="font-bold">Lens:</span> {image.lens?.name}
                            </p>}
                            {image.iso && <p className="flex items-center gap-2">
                                <span className="font-bold">ISO:</span> {image.iso?.name}
                            </p>}
                            {image.aperture && <p className="flex items-center gap-2">
                                <span className="font-bold">Aperture:</span> {image.aperture}
                            </p>}
                            {image.shutter_speed && <p className="flex items-center gap-2">
                                <span className="font-bold">Shutter Speed:</span> {image.shutter_speed}s
                            </p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
