import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');
    const id_user = url.searchParams.get('id_user') || 0;

    if (projectId) {
        
        const responseProject = await fetch(`http://localhost:3000/api/projects/project/updateLastSeen?id=${projectId}` , {
            method : 'PATCH'
        });

        // Récupérer le projet n° projectId depuis supabase
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .or("public.eq."+ true+",id_user.eq."+ id_user)
            .eq("id", projectId);

        if (error) console.error(error);
        else {
            return NextResponse.json(data, { status: 200 });
        };
    } else if (id_user != 0) {

        // Récupérer le projet depuis supabase
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .or("public.eq."+ true+",id_user.eq."+ id_user);
        
        if (error) console.error(error);
        else {
            return NextResponse.json(data, { status: 200 });
        };
    } else {

        // Récupérer le projet depuis supabase
        const { data, error } = await supabase
            .from('projets')
            .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
            .eq("public", true);
        
        if (error) console.error(error);
        else {
            return NextResponse.json(data, { status: 200 });
        };
    }
}