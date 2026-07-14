'use client'

import Entete from "@/components/page ajout/Entete";
import Contante from "@/components/page ajout/Contante";
import CreateNewProject from "@/hooks/newProject";

export default function New(){

    const {outil, etat, categorie, setCategorie, nouveauArticle, setNouveauArticle, nouvelDocumentation, setNouvelDocumentation, nouveauOutils, setNouveauOutils} = CreateNewProject();

    return (
        <div>
            <Entete props={{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils, nouvelDocumentation, setNouvelDocumentation}}/>
            <Contante props={{nouvelDocumentation, setNouvelDocumentation,categorie,setCategorie}} />
        </div>
    );
}