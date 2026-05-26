"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";
import sha256 from "@/components/sha256";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const Pseudo:string = url.searchParams.get('pseudo');
    const MotDePasse:string = url.searchParams.get('mdp');

    if (Pseudo && MotDePasse) {
        
        async function fetchUser(Pseudo: string) {
            const { data, error } = await supabase
            .from('users')
            .select(` id, name, mdp, theme, presentation, created_at `)
            .eq('pseudo', Pseudo)
            .limit(1);
            if (error) console.error(error);
            else return (data[0] !== undefined ? data[0] : { id: 0, name: '', theme: '', created_at: '', mdp: '' });
        }
        
        let MDP = await sha256(MotDePasse);

        fetchUser(Pseudo).then((data: any) => {
            if (data.id == 0){
                return Response.json(false);
            } else if (data.mdp !== MDP){
                return Response.json(false);
            } else {
                // setUser(data);
                // fetchProjet(data.id, setProjets);
                // fetchLastSeenProjet(data.id, setLastProjets);
                // fetchProjetUser(data.id, setProjetUser);
                // fetchLien(data.id,setLien);        
                // fetchCategorie(setCategorie);
                // setPage('compte');
                return Response.json(true);
            }
            return Response.json(false);
        });
    }
}