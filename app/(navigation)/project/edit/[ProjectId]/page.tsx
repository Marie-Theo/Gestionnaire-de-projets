"use client";

import { use, useEffect, useState } from "react";
import Entete from "@/components/page ajout/Entete";
import Contante from "@/components/page ajout/Contante";

import { documentationProps, projectProps, etatProps, OutilsProps, categorieProps } from "@/hooks/interface";

export default function Pageproject({ params }: { params: Promise<{ ProjectId: string }>; }) {
    const ProjectId = params.value.ProjectId;

    const [id_user, setId_user] = useState<number | null>(null);
    
    const [etat, setEtat] = useState<etatProps[]>([]);
    const [outil, setOutil] = useState<OutilsProps[]>([]);
    const [categorie,setCategorie] = useState<categorieProps[]>([]);
    const [nouveauArticle, setNouveauArticle] = useState<projectProps>({ id:0, created_at:'', seen_at:'', title:'', presentation:'', repositories:'',etat:{ name:'', couleur:''}, id_user:0, public:false });
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

            setEtat(await responseEtat.json());
        }

        if (etat.length === 0) {
            fetchEtat();
        } else {
            console.log(etat);
        }
    }, [etat]);

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

            setOutil(await responseOutil.json());
        }

        if (outil.length === 0) {
            fetchOutil();
        } else {
            console.log(outil);
        }
    }, [outil]);

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

            setCategorie(await responseCategorie.json());
        }

        if (categorie.length === 0) {
            fetchCategorie();
        } else {
            console.log(categorie);
        }
    }, [categorie]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stored = sessionStorage.getItem("id");
        setId_user(stored ? Number(stored) : 0);
    }, []);

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
            console.log(nouvelDocumentation);
            console.log(nouveauArticle);
            console.log(nouveauOutils);
        })();

        return () => controller.abort();
    }, [id_user, ProjectId]);

    if (loading) return <div>Chargement...</div>;

    
    return (
        <div>
            <Entete
                nouveauArticle={nouveauArticle}
                setNouveauArticle={setNouveauArticle}
                outil={outil}
                etat={etat}
                nouveauOutils={nouveauOutils}
                setNouveauOutils={setNouveauOutils}
                nouvelDocumentation={nouvelDocumentation}/>
            <Contante props={nouvelDocumentation, setNouvelDocumentation, categorie, setCategorie} />
        </div>
    );
}