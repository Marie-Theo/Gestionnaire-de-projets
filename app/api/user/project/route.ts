"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const id_user = url.searchParams.get('id_user');

    if (id_user){
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .eq("id_user", id_user);
        if (error) console.error(error);
        else {
            return Response.json(data);
        };
    }
}