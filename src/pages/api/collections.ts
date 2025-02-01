import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { data, error } = await supabase.from('collections')
        .select(`*, 
            cover_image:cover_image_id (url)`)
        .eq('active', true);

        if (error) {
            console.error('Erro ao buscar collections:', error);
            return res.status(500).json({ error: 'Erro ao buscar collections' });
        }

        console.log('Dados retornados:', data);

        return res.status(200).json({ collections: data });
    } catch (err) {
        console.error('Erro interno do servidor:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
