"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
    
    const url = new URL(request.url);

    const id_user = url.searchParams.get('id_user');

    // Récupérer les projets publics si l'utilisateur n'est pas connecté vu récemment, sinon récupérer les projets de l'utilisateur connecté qui ont été vus récemment
    if (id_user === '0') {
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat:etat ( name, couleur ), id_user, public')
            .eq("public", true)
            .order('seen_at', { ascending: false })
            .limit(4);
        console.log("fetching last seen projets...");

        if (error) {
            console.error(error);
        }
        else {
            return Response.json(data);
        };
    } else {
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .or("public.eq."+ true+",id_user.eq."+ id_user)
            .order('seen_at', { ascending: false })
            .limit(4);
        console.log("fetching last seen projets...");

        if (error) {
            console.error(error);
        }
        else {
            return Response.json(data);
        };
    }
} 