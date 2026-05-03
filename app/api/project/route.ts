"use client"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');

    // console.log(projectId);

    // Récupérer les projets publics si l'utilisateur n'est pas connecté, sinon récupérer les projets de l'utilisateur connecté
    const { data, error } = await supabase
        .from('projets')
        .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
        .eq("id", projectId);
    // console.log("fetching Article...");

    if (error) console.error(error);
    else {
        // console.log(data);
        return Response.json(data[0]);
    };
}