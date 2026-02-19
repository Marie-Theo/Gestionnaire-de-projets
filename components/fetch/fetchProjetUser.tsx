"use client"

import { supabase } from "@/lib/supabaseClient";

export default async function fetchProjetsUser(id_user: number, setProjetUser: (projetsUser: any[]) => void) {
    // Récupérer les projets publics si l'utilisateur n'est pas connecté, sinon récupérer les projets de l'utilisateur connecté
    const { data, error } = await supabase
        .from('projets')
        .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
        .eq("id_user", id_user)
        .order('id_etat', { ascending: false });
    console.log("fetching projets...");

    if (error) console.error(error);
    else {
        console.log(data);
        setProjetUser(data || []);
    };
}
