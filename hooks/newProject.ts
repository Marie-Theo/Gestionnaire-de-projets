import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface projetProps {
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
};

interface documentationProps {
    id:number;
    id_categorie:{
        id:number;
        text:string;
        ordre:number;
        style:number;
    };
    text:string;
};

interface categorieProps {
    id:number;
    text:string;
    ordre:number;
    style:number;
};

export default function CreateNewProject() {
    
    const [etat, setEtat] = useState<any[]>([]);
    const [outil, setOutil] = useState<any[]>([]);
    const [categorie,setCategorie] = useState<categorieProps[]>([]);
    const [nouveauArticle, setNouveauArticle] = useState<projetProps>({ id:0, created_at:'', seen_at:'', title:'', presentation:'', repositories:'',etat:[{ name:'', couleur:''}], id_user:0, public:false });
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

    return {
        etat,
        outil,
        categorie,setCategorie,
        nouveauArticle, setNouveauArticle,
        nouvelDocumentation, setNouvelDocumentation,
        nouveauOutils, setNouveauOutils
    }
}