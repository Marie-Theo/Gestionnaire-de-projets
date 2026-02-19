"use client"

import { supabase } from "@/lib/supabaseClient";

interface projetProps {
    id: number;
    created_at: string;
    seen_at: string;
    title: string;
    presentation: string;
    repositories: string;
    etat: {
        name: string,
        couleur: string
    }[];
    id_user: number;
    public: boolean;
}

export default async function fetchArticle(id_projet: number, setArticle: (article: projetProps) => void){

    setArticle({ id:0, created_at:'', seen_at:'', title:'', presentation:'', repositories:'',etat:[{ name:'', couleur:''}], id_user:0, public:true });
    
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
}