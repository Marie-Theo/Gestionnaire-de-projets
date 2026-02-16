"use client"

import { supabase } from "@/lib/supabaseClient";

export default async function fetchProjet(id_user: number, setProjets: (projets: any[]) => void) {
    
    // Récupérer les projets publics si l'utilisateur n'est pas connecté, sinon récupérer les projets de l'utilisateur connecté
    if (id_user == 0) {
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat:etat ( name, couleur ), id_user, public')
            .eq("public", true)
            .order('id_etat', { ascending: false });
        // console.log("fetching projets...");

        if (error) console.error(error);
        else {
            // console.log(data);
            setProjets(data || []);
        };
    } else {
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .or("public.eq."+ true+",id_user.eq."+ id_user)
            .order('id_etat', { ascending: false });
        // console.log("fetching projets...");

        if (error) console.error(error);
        else {
            // console.log(data);
            setProjets(data || []);
        };
    }

} 