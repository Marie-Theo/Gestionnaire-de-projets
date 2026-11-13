import Titre from "@/components/page ajout/Titre";
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

export default function Entete(
    {nouveauArticle, setNouveauArticle,
    outil, etat,
    nouveauOutils, setNouveauOutils,
    nouvelDocumentation}
    :{nouveauArticle:any,setNouveauArticle: (nouveauArticle: any) => void,
    outil:any, etat:any,
    nouveauOutils:any[], setNouveauOutils: React.Dispatch<React.SetStateAction<string[]>>,
    nouvelDocumentation:documentationProps[]}){

    return (
        <div className="grid grid-cols-3 gap-5 xl:gap-1">
            <Titre props={{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils}}/>
            <Sommaire documentation={nouvelDocumentation}/>
        </div>
    );
}