"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');

    if (projectId){
        // Récupérer la outil depuis supabase
        const { data, error } = await supabase
            .from('outils')
            .select('id, id_projet, outil:outil ( name )')
            .eq('id_projet', projectId);

        if (error) console.error(error);
        else {
            return Response.json(data);
        };
    } else {
        // Récupérer la outil depuis supabase
        const { data, error } = await supabase
            .from('outil')
            .select('id, name');

        if (error) console.error(error);
        else {
            return Response.json([data]);
        };
    }
}