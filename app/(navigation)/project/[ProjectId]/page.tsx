import Entete from "@/components/page project/entete";
import Contante from "@/components/page project/contenu";

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: string;
    }[];
}

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

export default async function Pageproject({ params } : {params : { projectId : string }}) {

    const { projectId } = await params;

    const response = await fetch(`http://localhost:3000/api/projects?id=${projectId}` , {
        method : 'GET',
        headers: {
            'Cache-control' : 'no-cache, no-store, must-revalidate',
            'Pragma' : 'no-cache',
            'Expires' : '0'
        }
    });

    const {project, documentation, outil} : {project:projectProps, documentation:documentationProps[], outil:OutilsProps[]} = await response.json();

    return (
	    <div>
            <Entete project={project} outils={outil} documentation={documentation}/>
            <Contante documentation={documentation} />
        </div>
    );
}