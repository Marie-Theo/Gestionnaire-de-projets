"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";
import sha256 from "@/components/sha256";

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const id = url.searchParams.get('id');

    const { data, error } = await supabase
    .from('users')
    .select(` id, name, theme, presentation, created_at `)
    .eq('id', id)
    .limit(1);
    if (error) console.error(error);
    else {
        return Response.json(data[0]);
    };
}