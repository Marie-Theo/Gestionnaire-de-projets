"use client";

import { use, useEffect, useState } from "react";
import Entete from "@/components/page ajout/Entete";
import Contante from "@/components/page ajout/Contante";

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

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: { name: string }[];
}

interface documentationProps {
    id: number;
    id_categorie: {
        id: number;
        text: string;
        ordre: number;
        style: number;
    };
    text: string;
}

interface projectProps {
    id: number;
    created_at: string;
    seen_at: string;
    title: string;
    presentation: string;
    repositories: string;
    etat: { name: string; couleur: string };
    id_user: number;
    public: boolean;
}

export default function Pageproject({ params }: { params: Promise<{ ProjectId: string }>; }) {
    const { ProjectId } = use(params); // pas besoin d'await ici, un Client Component reçoit des props "normales"

    const [id_user, setId_user] = useState<number | null>(null);
    
    const [etat, setEtat] = useState<any[]>([]);
    const [outil, setOutil] = useState<any[]>([]);
    const [categorie,setCategorie] = useState<categorieProps[]>([]);
    const [nouveauArticle, setNouveauArticle] = useState<projetProps>({ id:0, created_at:'', seen_at:'', title:'', presentation:'', repositories:'',etat:[{ name:'', couleur:''}], id_user:0, public:false });
    const [nouvelDocumentation, setNouvelDocumentation] = useState<documentationProps[]>([{id: Date.now() + Math.random(),id_categorie:{id:0,text:'',ordre:0,style:1},text:''}]);
    const [nouveauOutils, setNouveauOutils] = useState<string[]>([]);

    useEffect(() => {
        async function fetchEtat() {
            
            const responseEtat = await fetch(`http://localhost:3000/api/projects/etat` , {
                method : 'GET',
                headers: {
                    'Cache-control' : 'no-cache, no-store, must-revalidate',
                    'Pragma' : 'no-cache',
                    'Expires' : '0'
                }
            });

            setNouveauArticle(await responseEtat.json());
        }

        if (etat.length === 0) {
            fetchEtat();
        }
    }, []);

    useEffect(() => {
        async function fetchOutil() {
            
            const responseOutil = await fetch(`http://localhost:3000/api/projects/outil` , {
                method : 'GET',
                headers: {
                    'Cache-control' : 'no-cache, no-store, must-revalidate',
                    'Pragma' : 'no-cache',
                    'Expires' : '0'
                }
            });

            setNouveauArticle(await responseOutil.json());
        }

        if (outil.length === 0) {
            fetchOutil();
        }
    }, []);

    useEffect(() => {
        async function fetchCategorie() {
            setCategorie([{ id:0, text:'', ordre:0, style:0 }]);    
            
            const responseCategorie = await fetch(`http://localhost:3000/api/projects/categorie` , {
                method : 'GET',
                headers: {
                    'Cache-control' : 'no-cache, no-store, must-revalidate',
                    'Pragma' : 'no-cache',
                    'Expires' : '0'
                }
            });

            setNouveauArticle(await responseCategorie.json());
        }

        if (categorie.length === 0) {
            fetchCategorie();
        }
    }, []);

    const [loading, setLoading] = useState(true);

    // 1. Lecture du storage une seule fois, après le montage
    useEffect(() => {
        const stored = sessionStorage.getItem("id");
        setId_user(stored ? Number(stored) : 0);
    }, []);

    // 2. Fetch quand id_user est connu (une seule fois, car id_user ne change plus après)
    useEffect(() => {
        if (id_user === null) return; // on attend d'avoir lu le sessionStorage
        else if (id_user === 0) return;
        const controller = new AbortController();

        (async () => {
            try {
                
            const responseProject = await fetch(`http://localhost:3000/api/projects/project?id=${ProjectId}&id_user=${id_user}` , {
                method : 'GET',
                headers: {
                    'Cache-control' : 'no-cache, no-store, must-revalidate',
                    'Pragma' : 'no-cache',
                    'Expires' : '0'
                }
            });

            setNouveauArticle(await responseProject.json());

            const responseDocumentation = await fetch(`http://localhost:3000/api/projects/documentation?id=${ProjectId}&id_user=${id_user}` , {
                method : 'GET',
                headers: {
                    'Cache-control' : 'no-cache, no-store, must-revalidate',
                    'Pragma' : 'no-cache',
                    'Expires' : '0'
                }
            });

            setNouvelDocumentation(await responseDocumentation.json());

            const responseOutil = await fetch(`http://localhost:3000/api/projects/outil?id=${ProjectId}&id_user=${id_user}` , {
                method : 'GET',
                headers: {
                    'Cache-control' : 'no-cache, no-store, must-revalidate',
                    'Pragma' : 'no-cache',
                    'Expires' : '0'
                }
            });

            setNouveauOutils(await responseOutil.json());
                
            } catch (e) {
                if ((e as Error).name !== "AbortError") console.error(e);
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [id_user, ProjectId]);

    if (loading) return <div>Chargement...</div>;


    console.log(nouvelDocumentation);
    console.log(nouveauArticle);
    console.log(nouveauOutils);
    console.log(categorie);
    console.log(etat);
    console.log(outil);
    
    return (
        <div>
            <Entete props={nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils,nouvelDocumentation}/>
            <Contante props={nouvelDocumentation, setNouvelDocumentation, categorie, setCategorie} />
        </div>
    );
}