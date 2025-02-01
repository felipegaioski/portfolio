import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Collection } from '@/types/types';

export default function Collections() {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const res = await fetch('/api/collections');
                const data = await res.json();

                if (data.error) {
                    setError(data.error);
                } else {
                    setCollections(data.collections);
                }
            } catch {
                setError('Erro ao carregar collections');
            }
        };

        fetchCollections();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-4 main-container my-8">
            {collections.map((collection) => (
                <div className="bg-white rounded-md">
                    <Link key={collection.id} href={`/collections/${collection.id}`} className="block overflow-hidden rounded-md shadow-lg">
                        <img src={collection.cover_image?.url} alt={collection.name} className="w-full h-full object-cover pt-4 pl-4 pr-4"/>
                        <div className="px-6 py-4 section-title">
                            <h2 className="text-lg font-bold text-center">{collection.name}</h2>
                        </div>
                    </Link>
                </div>
            ))}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
