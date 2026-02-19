"use client"

import { supabase } from "@/lib/supabaseClient";

interface documentationProps {
    id:number;
    id_categorie:{
        id:number;
        text:string;
        ordre:number;
        style:number;
    }[];
    text:string;
}

export default async function fetchDocumentation(id_article: number, setDocumentation: (documentation: documentationProps[]) => void){

    setDocumentation([{ id:0, id_categorie:[{ id:0, text:'', ordre:0, style:0}], text:'' }]);
    
    const { data, error } = await supabase
        .from('documentations')
        .select('id, id_categorie ( id, text, ordre, style ), text')
        .eq("id_projet", id_article)
        .order('ordre', { referencedTable: 'id_categorie', ascending: false })
        .order('id_categorie', { ascending: true });
    console.log("fetching Documentation...");

    if (error) console.error(error);
    else {
        console.log(data);
        setDocumentation(data || []);
    };
}