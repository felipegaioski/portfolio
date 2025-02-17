import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CollectionSection from '@/components/collection-section';
import { Collection } from '@/types/types';
import ImageGrid from '@/components/image-grid';
import Layout from '@/components/layout';
import { useLanguage } from "../../contexts/language-context";
import SEO from "@/components/seo";

export default function CollectionPage() {
    const router = useRouter();
    const { id } = router.query;
    const [collection, setCollection] = useState<Collection | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { language } = useLanguage();

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
                setIsLoading(false);
            }
        };

        fetchCollection();
    }, [id]);

    if (error) return <p>{error}</p>;

    return (
        <Layout>
            <SEO 
                pageTitle={ language === "en" ? `${collection?.name} - Felipe Gaioski Portfolio` : `${collection?.name} - Portfolio Felipe Gaioski` } 
                pageDescription={ language === "en" ? `${collection?.name}` : `${collection?.name}` } 
            />
            {isLoading && (  
                <div className="col-span-4 flex justify-center items-center py-8">
                    <div className="w-12 h-12 border-4 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            {!isLoading && collection ? (
                <>
                    <CollectionSection collection={collection} />
                    <ImageGrid collectionId={collection.id} />
                </>
            ) : (null)}
        </Layout>
    );
}
