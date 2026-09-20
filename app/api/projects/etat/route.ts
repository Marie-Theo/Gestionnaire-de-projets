import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response){

    // Récupérer les outil d'un projet
    const { data, error } = await supabase
        .from('etat')
        .select('*')
        .order('id',{ascending:true});

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
}