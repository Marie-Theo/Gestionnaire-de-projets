import Titre from "@/components/page ajout/Titre";
import Sommaire from "../page projet/sommaire";
import { Dispatch, SetStateAction } from "react"

export default function Entete({props}:{props:{nouveauArticle:any, setNouveauArticle: (nouveauArticle: any) => void, outil:any, etat:any, nouveauOutils:any[], setNouveauOutils: React.Dispatch<React.SetStateAction<string[]>>,nouvelDocumentation:documentationProps[]}}){

    const {nouveauArticle,setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils, nouvelDocumentation} = props;

    return (
        <div className="grid grid-cols-3 gap-5 xl:gap-1">
            <Titre props={{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils}}/>
            <Sommaire props={{documentation:nouvelDocumentation}}/>
        </div>
    );
}