"use client"

import { supabase } from "../lib/supabaseClient";

export default function fetchProjet(id_user: number, setLastProjets: (lastProjets: any[]) => void) {
    
    async function fetchLastProjets() {
    // Récupérer les projets publics si l'utilisateur n'est pas connecté vu récemment, sinon récupérer les projets de l'utilisateur connecté qui ont été vus récemment
    if (id_user === 0) {
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat:etat ( name, couleur ), id_user, public')
            .eq("public", true)
            .order('seen_at', { ascending: false })
            .limit(4);
            console.log("fetching last seen projets...");

            if (error) console.error(error);
            else {
                console.log(data);
                setLastProjets(data || []);
            };
    } else {
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .or("public.eq."+ true+",id_user.eq."+ id_user)
            .order('seen_at', { ascending: false })
            .limit(4);
            console.log("fetching last seen projets...");

            if (error) console.error(error);
            else {
                console.log(data);
                setLastProjets(data || []);
            };
        }
    }
    fetchLastProjets();

} 