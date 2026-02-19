"use client"

import { useEffect } from 'react';
import { supabase } from "@/lib/supabaseClient";

export default function fetchArticle(id_projet: number, setArticle: (article: any) => void){
    useEffect(() => {
        async function fetchArticle() {
    
        // Récupérer les projets publics si l'utilisateur n'est pas connecté, sinon récupérer les projets de l'utilisateur connecté
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .eq("id", id_projet);
        console.log("fetching Article...");

        if (error) console.error(error);
        else {
            console.log(data);
            setArticle(data || []);
        };
    }}, []);

} 