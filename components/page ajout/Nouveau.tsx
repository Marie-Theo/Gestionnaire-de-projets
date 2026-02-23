import Entete from "@/components/page ajout/Entete";
import { Dispatch, SetStateAction } from "react"

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
    }[];
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
    }[];
    text:string;
};

interface categorieProps {
    id:number;
    text:string;
    ordre:number;
    style:number;
};

export default function Nouveau({props}:{props:{categorie:categorieProps[],setCategorie: (categorie: categorieProps[]) => void,nouveauArticle:projetProps, setNouveauArticle: (nouveauArticle: projetProps) => void,nouvelDocumentation:documentationProps[], setNouvelDocumentation: (nouvelDocumentation: documentationProps[]) => void,outil:any,etat:any, nouveauOutils:any[], setNouveauOutils: Dispatch<SetStateAction<string[]>> }}){

    const {categorie,setCategorie,nouveauArticle, setNouveauArticle,nouvelDocumentation, setNouvelDocumentation, outil, etat, nouveauOutils, setNouveauOutils}  = props;

    return (
        <div>
            <Entete props={{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils}}/>
        </div>
    );
}