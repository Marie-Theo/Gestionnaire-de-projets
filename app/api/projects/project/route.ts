"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');

    if (projectId) {
        
        // Récupérer le projet n° projectId depuis supabase
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .eq("id", projectId);

        if (error) console.error(error);
        else {
            return Response.json(data[0]);
        };
    } else {

        // Récupérer le projet depuis supabase
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public');
        
        if (error) console.error(error);
        else {
            return Response.json(data[0]);
        };
    }
}