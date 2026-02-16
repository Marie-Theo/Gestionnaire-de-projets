import { supabase } from "@/lib/supabaseClient";
import moment from 'moment';

export default function updateLastSeen(id_projet: number) {
        supabase
      .from('projets')
      .update({ seen_at: moment(new Date()).format('YYYY-MM-DD HH:mm:ss') })
      .eq('id', id_projet)
      .then(({ error }) => {
        if (error) console.error('Erreur lors de la mise à jour du projet:', error);
      });
}