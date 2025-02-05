import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const collectionId = req.query.id;

        if (!collectionId || typeof collectionId !== 'string') {
            return res.status(400).json({ error: 'collectionId é obrigatório' });
        }

        const { data, error } = await supabase
            .from('collections')
            .select(`*`)
            .eq('active', true)
            .eq('id', collectionId)

        if (error) {
            console.error('Erro ao buscar collecions:', error);
            return res.status(500).json({ error: 'Erro ao buscar collecions' });
        }

        return res.status(200).json({ collections: data });
    } catch (err) {
        console.error('Erro interno do servidor:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
