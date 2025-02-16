import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Collection } from '@/types/types';

export default function Collections() {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Track loading state

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const res = await fetch('/api/collections/collections');
                const data = await res.json();

                if (data.error) {
                    setError(data.error);
                } else {
                    setCollections(data.collections);
                }
            } catch {
                setError('Erro ao carregar collections');
            } finally {
                setIsLoading(false); // Stop loading after fetching data
            }
        };

        fetchCollections();
    }, []);

    return (
        <div className="main-container">
            <div className="page-title mt-8">
                <h2>Gallery</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 my-8">
                {isLoading && (  
                    <div className="col-span-4 flex justify-center items-center">
                        <div className="w-12 h-12 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                {!isLoading && collections.map((collection) => (
                    <div className="bg-white rounded-md group transition-all duration-300 hover:shadow-xl overflow-hidden">
                    <Link 
                        href={{
                            pathname: '/collection/[id]',
                            query: { 
                                id: collection.id, 
                                data: JSON.stringify(collection)
                            }
                        }}
                        as={`/collection/${collection.id}`} 
                        className="block overflow-hidden rounded-md shadow-lg"
                    >
                        <div className="overflow-hidden m-3"> 
                            <img 
                                src={collection.cover_image?.url} 
                                alt={collection.name} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="px-6 pb-4 section-title">
                            <h2 className="text-lg font-bold text-center transition-all duration-300 group-hover:tracking-wider">
                                {collection.name}
                            </h2>
                        </div>
                    </Link>
                </div>
                
                ))}

                {!isLoading && error && <p className="text-red-500 col-span-4 text-center">{error}</p>}
            </div>
        </div>
    );
}
