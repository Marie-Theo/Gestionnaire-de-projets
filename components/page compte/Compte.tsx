import ListingProjet from "@/components/page projects/listingProject";  
import Entete from "@/components/page compte/entete";
import { tools } from "@/components/tools";

import { userProps, projectProps, lienProps } from "@/hooks/interface";

export default function Compte ({props} : {props:{projetUser:projectProps[], setProjetUser: (projetUser: projectProps[]) => void, outils:any[],user:userProps, setPage: (page: string) => void, lien:lienProps[],setLastProjets: (lastProjets: projetProps) => void, setArticle: (article: projetProps) => void, setDocumentation: (documentation: documentationProps[]) => void}}) {

    const { projetUser, setProjetUser, outils, user, setPage, setLastProjets, lien, setArticle, setDocumentation } = props;

    return(
        <section id="compte">
            <Entete props={{lien,user}}/>
            <ListingProjet props={{projets:projetUser, outils, title:`Projet${tools.pluralize(projetUser.length)} :`, setPage, setLastProjets, setArticle, user, setDocumentation}} />
        </section>
    );
}