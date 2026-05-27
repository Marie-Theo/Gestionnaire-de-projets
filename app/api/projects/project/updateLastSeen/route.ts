"use server"
  
import moment from 'moment';
import { supabase } from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

  export async function PATCH(request: Request, response: Response){
  
      const url = new URL(request.url);
  
      const projectId = url.searchParams.get('id');
  
      if (projectId) {
        supabase
        .from('projets')
            supabase
            .from('projets')
            .update({ seen_at: moment(new Date()).format('YYYY-MM-DD HH:mm:ss') })
            .eq('id', projectId)
            .then(({ error }) => {
            if (error) {
                console.error('Erreur lors de la mise à jour du projet:', error)
            };
        });
      }
  }