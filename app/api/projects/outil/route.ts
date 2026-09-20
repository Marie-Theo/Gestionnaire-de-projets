"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');
    const id_user = url.searchParams.get('id_user') || 0;

    if (projectId){
        // Récupérer les outil d'un projet
        const { data, error } = await supabase
            .from('outils')
            .select('id, id_projet, outil:outil ( name )')
            .or("public.eq."+ true+",id_user.eq."+ id_user)
            .gte("id", projectId);

        if (error) console.error(error);
        else {
            return Response.json(data);
        };
    } else {
        // Récupérer tous les outils util
        const { data, error } = await supabase
            .from('outils')
            .select('id, id_projet, outil:outil ( name )')
            .or("public.eq."+ true+",id_user.eq."+ id_user);

        if (error) console.error(error);
        else {
            return Response.json([data]);
        };
    }
}