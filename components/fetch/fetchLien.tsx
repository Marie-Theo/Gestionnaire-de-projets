"use client"

import { supabase } from "@/lib/supabaseClient";

export default async function fetchLien(id:number,setLien: (lien: any[]) => void) {
    // Récupérer les projets publics si l'utilisateur n'est pas connecté, sinon récupérer les projets de l'utilisateur connecté
    const { data, error } = await supabase
        .from('liens_user')
        .select('id, site ( id, site ), url ')
        .eq("id_user", id);
    // console.log("fetching lien...");

    if (error) console.error(error);
    else {
        // console.log(data);
        setLien(data || []);
    };
}
