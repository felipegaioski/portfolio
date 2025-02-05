import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const collectionId = req.query.id;

        if (!collectionId || typeof collectionId !== 'string') {
            return res.status(400).json({ error: 'collectionId é obrigatório' });
        }

        const { data, error } = await supabase
            .from('images')
            .select(`
                *,
                camera:camera_id (*),
                lens:lens_id (*),
                iso:iso_id (*),
                collection:collection_id (*)
            `)
            .eq('active', true)
            .eq('collection_id', collectionId);

        if (error) {
            console.error('Erro ao buscar imagens:', error);
            return res.status(500).json({ error: 'Erro ao buscar imagens' });
        }

        data.sort((a, b) => b.rating - a.rating);

        return res.status(200).json({ images: data });
    } catch (err) {
        console.error('Erro interno do servidor:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
