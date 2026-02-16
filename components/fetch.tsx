"use client"

import { supabase } from "../lib/supabaseClient";

export default function fetchProjet(id_user: number, setProjets: (projets: any[]) => void, setLastProjets: (lastProjets: any[]) => void) {
    
    async function fetchProjets() {
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .or("public.eq."+ true+",id_user.eq."+ id_user)
            .order('id_etat', { ascending: false });
            console.log("fetching projets...");

            if (error) console.error(error);
            else {
                console.log(data);
                setProjets(data || []);
            };
        }

    fetchProjets();

    async function fetchLastProjets() {
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
    fetchLastProjets();

} 