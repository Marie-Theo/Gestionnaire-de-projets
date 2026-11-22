"use server"

import { supabase } from "@/lib/supabaseClient";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){

    const url = new URL(request.url);

    const Project = url.searchParams.get('Project');
    const id_user = url.searchParams.get('id_user');
    
    return NextResponse.json({error:'test'},{status:500})
    return NextResponse.json({status:200})

}