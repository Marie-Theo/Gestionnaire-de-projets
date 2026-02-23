import Titre from "@/components/page ajout/Titre";
import { Dispatch, SetStateAction } from "react"

export default function Entete({props}:{props:{nouveauArticle:any, setNouveauArticle: (nouveauArticle: any) => void, outil:any, etat:any, nouveauOutils:any[], setNouveauOutils: React.Dispatch<React.SetStateAction<string[]>>}}){

    const {nouveauArticle,setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils} = props;

    return (
        <div className="grid grid-cols-3 gap-5 xl:gap-1">
            <Titre props={{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils}}/>
        </div>
    );
}