"use client"

import { supabase } from "@/lib/supabaseClient";

import { documentationProps } from "@/hooks/interface";

export default async function fetchDocumentation(id_article: number, setDocumentation: (documentation: documentationProps[]) => void){

    setDocumentation([{ id:0, id_categorie:{ id:0, text:'', ordre:0, style:0}, text:'' }]);
    
    const { data, error } = await supabase
        .from('documentations')
        .select('id, id_categorie ( id, text, ordre, style ), text')
        .eq("id_projet", id_article)
        .order('id_categorie', { ascending: true })
        .order('id', { ascending: true })
        .order('ordre', { referencedTable: 'id_categorie', ascending: false });
    console.log("fetching Documentation...");

    if (error) console.error(error);
    else {
        console.log(data);
        setDocumentation(data || []);
    };
}