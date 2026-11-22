import Titre from "@/components/page ajout/Titre";
import Sommaire from "@/components/page project/sommaire";
import { documentationProps } from "@/hooks/interface";

import { projectProps, etatProps, OutilProps } from "@/hooks/interface";

export default function Entete(
    {props:{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils, nouvelDocumentation, setNouvelDocumentation}}
    :{props:{nouveauArticle:projectProps,setNouveauArticle: (nouveauArticle: projectProps) => void,
    outil:OutilProps[], etat:etatProps[],
    nouveauOutils:OutilProps[], setNouveauOutils: React.Dispatch<React.SetStateAction<string[]>>,
    nouvelDocumentation:documentationProps[], setNouvelDocumentation: React.Dispatch<React.SetStateAction<documentationProps[]>>}}){

    return (
        <div className="grid grid-cols-3 gap-5 xl:gap-1">
            <Titre props={{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils}}/>
            <Sommaire documentation={nouvelDocumentation}/>
        </div>
    );
}