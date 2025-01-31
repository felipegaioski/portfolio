import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Consulta incluindo as relações
        const { data, error } = await supabase
            .from('images')
            .select(`
                *,
                camera:camera_id (*),
                lens:lens_id (*),
                iso:iso_id (*),
                collection:collection_id (*)
            `)
            .eq('active', true);

        if (error) {
            console.error('Erro ao buscar imagens:', error);
            return res.status(500).json({ error: 'Erro ao buscar imagens' });
        }

        console.log('Dados retornados:', data);

        return res.status(200).json({ images: data });
    } catch (err) {
        console.error('Erro interno do servidor:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
