"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');
    const id_user = url.searchParams.get('id_user') || 0;

    // Récupérer la documentation depuis supabase
    const { data, error } = await supabase
        .from('documentations')
        .select('id, id_categorie ( id, text, ordre, style ), text')
        .or("public.eq."+ true+",id_user.eq."+ id_user)
        .gte("id", projectId)
        .order('id_categorie', { ascending: true })
        .order('id', { ascending: true })
        .order('ordre', { referencedTable: 'id_categorie', ascending: false });

    if (error) console.error(error);
    else {
        return Response.json(data);
    };
}