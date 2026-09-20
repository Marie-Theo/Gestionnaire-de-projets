import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');
    const id_user = url.searchParams.get('id_user');

    if (projectId){
        // Récupérer les outil d'un projet
        const { data, error } = await supabase
            .from('outils')
            .select('id, outil:outil ( name ), id_projet, id_projet ()')
            .or(`public.eq.true,id_user.eq.${id_user}`, { foreignTable: 'id_projet' })
            .eq("id_projet", projectId);

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json(data);
    } else if (id_user) {
        // Récupérer tous les outils util
        const { data, error } = await supabase
            .from('outils')
            .select('id, id_projet, id_projet (), outil:outil ( name )')
            .or(`public.eq.true,id_user.eq.${id_user}`, { foreignTable: 'id_projet' });

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
        else {
            return Response.json([data]);
        };
    } else {
        // Récupérer tous les outils util
        const { data, error } = await supabase
            .from('outil')
            .select('*');

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
        else {
            return Response.json([data]);
        };
    }
}