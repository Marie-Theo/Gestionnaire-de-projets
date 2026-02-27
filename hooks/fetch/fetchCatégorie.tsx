"use client"

import { supabase } from "@/lib/supabaseClient";

interface categorieProps {
    id:number;
    text:string;
    ordre:number;
    style:number;
};

export default async function fetchCategorie(setCategorie: (categorie: categorieProps[]) => void){

    setCategorie([{ id:0, text:'', ordre:0, style:0 }]);    
    
    const { data, error } = await supabase
        .from('categorie')
        .select('id, text, ordre, style')
        .order('ordre', { ascending: true });
    console.log("fetching Categorie...");

    if (error) console.error(error);
    else {
        console.log(data);
        setCategorie(data || []);
    };
}