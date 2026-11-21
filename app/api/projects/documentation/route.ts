import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');
    const id_user = url.searchParams.get('id_user') || 0;

    if (!projectId) {
        return NextResponse.json({ error: "id manquant" }, { status: 400 });
    }

    // Récupérer la documentation depuis supabase
    const { data, error } = await supabase
        .from('documentations')
        .select('id, id_categorie ( id, text, ordre, style ), id_projet (), text')
        .or(`public.eq.true,id_user.eq.${id_user}`, { foreignTable: 'id_projet' })
        .eq("id_projet", projectId)
        .order('id_categorie', { ascending: true })
        .order('id', { ascending: true })
        .order('ordre', { referencedTable: 'id_categorie', ascending: false });

    if (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
}