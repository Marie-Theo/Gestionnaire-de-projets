import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

import { documentationProps, projectProps, etatProps, OutilProps, categorieProps } from "@/hooks/interface";

export default function CreateNewProject() {
    
    const [etat, setEtat] = useState<etatProps[]>([]);
    const [outil, setOutil] = useState<OutilProps[]>([]);
    const [categorie,setCategorie] = useState<categorieProps[]>([]);
    const [nouveauArticle, setNouveauArticle] = useState<projectProps>({ id:0, created_at:'', seen_at:'', title:'', presentation:'', repositories:'',etat:{ name:'', couleur:''}, id_user:0, public:false });
    const [nouvelDocumentation, setNouvelDocumentation] = useState<documentationProps[]>([{id: Date.now() + Math.random(),id_categorie:{id:0,text:'',ordre:0,style:1},text:''}]);
    const [nouveauOutils, setNouveauOutils] = useState<string[]>([]);

    useEffect(() => {
        async function fetchEtat() {
        const { data, error } = await supabase
            .from('etat')
            .select('*')
            .order('id',{ascending:true});
            console.log("fetching etat...");

            if (error) console.error(error);
            else {
                console.log(data);
                setEtat(data || []);
            };
        }

    if (etat.length === 0) {
        fetchEtat();
    }
    }, []);

    useEffect(() => {
        async function fetchOutil() {
        const { data, error } = await supabase
            .from('outil')
            .select('*');
            console.log("fetching outil...");

            if (error) console.error(error);
            else {
                console.log(data);
                setOutil(data || []);
            };
        }

    if (outil.length === 0) {
        fetchOutil();
    }
    }, []);

    
    useEffect(() => {
        async function fetchCategorie() {
        setCategorie([{ id:0, text:'', ordre:0, style:0 }]);    
        
        const { data, error } = await supabase
            .from('categorie')
            .select('id, text, ordre, style')
            .order('ordre', { ascending: true });
        console.log("fetching Categorie...");

        if (error) console.error(error);
        else {
            console.log(data);
            setCategorie(data || []);
        };
        }

        if (categorie.length === 0) {
            fetchCategorie();
        }
    }, []);

    return {
        etat,
        outil,
        categorie,setCategorie,
        nouveauArticle, setNouveauArticle,
        nouvelDocumentation, setNouvelDocumentation,
        nouveauOutils, setNouveauOutils
    }
}