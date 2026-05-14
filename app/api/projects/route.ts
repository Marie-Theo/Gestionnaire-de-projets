"use server"

import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

interface documentationProps {
    id:number;
    id_categorie:{
        id:number;
        text:string;
        ordre:number;
        style:number;
    };
    text:string;
}

interface projectProps {
    id: number;
    created_at: string;
    seen_at: string;
    title: string;
    presentation: string;
    repositories: string;
    etat: {
        name: string,
        couleur: string
    };
    id_user: number;
    public: boolean;
}

export async function GET(request: Request, response: Response){

    const url = new URL(request.url);

    const projectId = url.searchParams.get('id');

    if (projectId) {
        
        const responseProject = await fetch(`http://localhost:3000/api/projects/project?id=${projectId}` , {
            method : 'GET',
            headers: {
                'Cache-control' : 'no-cache, no-store, must-revalidate',
                'Pragma' : 'no-cache',
                'Expires' : '0'
            }
        });

        const project:projectProps = await responseProject.json();

        const responseDocumentation = await fetch(`http://localhost:3000/api/projects/documentation?id=${projectId}` , {
            method : 'GET',
            headers: {
                'Cache-control' : 'no-cache, no-store, must-revalidate',
                'Pragma' : 'no-cache',
                'Expires' : '0'
            }
        });

        const documentation:documentationProps[] = await responseDocumentation.json();

        const responseOutil = await fetch(`http://localhost:3000/api/projects/outil?id=${projectId}` , {
            method : 'GET',
            headers: {
                'Cache-control' : 'no-cache, no-store, must-revalidate',
                'Pragma' : 'no-cache',
                'Expires' : '0'
            }
        });

        const outil = await responseOutil.json();

        return Response.json({project,documentation,outil});
    } else {
        
        const responseProject = await fetch(`http://localhost:3000/api/projects/project` , {
            method : 'GET',
            headers: {
                'Cache-control' : 'no-cache, no-store, must-revalidate',
                'Pragma' : 'no-cache',
                'Expires' : '0'
            }
        });

        const project:projectProps = await responseProject.json();

        return Response.json({project});
    }
}