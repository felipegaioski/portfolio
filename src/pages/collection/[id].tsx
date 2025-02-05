import { useRouter } from 'next/router';
import { useEffect, useState, Suspense } from 'react';
import CollectionSection from '@/components/collection-section';
import { Collection } from '@/types/types';
import ImageGrid from '@/components/image-grid';
import Layout from '@/components/layout-two';

export default function CollectionPage() {
    const router = useRouter();
    const { id } = router.query;
    const [collection, setCollection] = useState<Collection | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchCollection = async () => {
            try {
                const res = await fetch(`/api/collections/${id}`);
                const data = await res.json();

                if (data.error) {
                    setError(data.error);
                } else {
                    setCollection(data.collections[0]);
                }
            } catch {
                setError('Erro ao carregar a coleção');
            } finally {
                // setLoading(false);
            }
        };

        fetchCollection();
    }, [id]);

    // if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    function Loading() {
        return <h2>🌀 Loading...</h2>;
    }

    return (
        <Layout>
            {collection ? (
                <>
                    <CollectionSection collection={collection} />
                    <Suspense fallback={<Loading />}>
                        <ImageGrid collectionId={collection.id} />
                    </Suspense>
                </>
            ) : (
                <p>Erro ao carregar Coleção</p>
            )}
        </Layout>
    );
}
