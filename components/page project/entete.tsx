import Titre from "@/components/page project/titre";
import Sommaire from "@/components/page project/sommaire";

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

export default function Entete({project, outils, documentation}: {outils:any[], project:projectProps, documentation:documentationProps[]}){

    return (
        <div className="grid grid-cols-3 gap-5 xl:gap-1">
            <Titre project={project} outils={outils} />
            <Sommaire documentation={documentation} />
        </div>
    );
}