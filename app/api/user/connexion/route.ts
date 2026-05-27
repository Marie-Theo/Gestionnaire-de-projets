"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";
import sha256 from "@/components/sha256";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const Pseudo:string = url.searchParams.get('pseudo');
    const MotDePasse:string = url.searchParams.get('mdp');

    if (Pseudo && MotDePasse) {
        
        let MDP = await sha256(MotDePasse);

        const { data, error } = await supabase
        .from('users')
        .select(` id, name, mdp, theme, presentation, created_at `)
        .eq('pseudo', Pseudo)
        .limit(1);
        if (error) {
            return Response.json([false,0,true]);
        }

        if (data[0] === undefined){
            return Response.json([false,0,false]);
        } else if (data[0]['mdp'] !== MDP){
            return Response.json([false,0,false]);
        } else {
            return Response.json([true,data[0]['id'],false]);
        }
        
    }
}