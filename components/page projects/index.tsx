import ListingProjet from '@/components/page projects/listingProject';
import Entete from '@/components/page projects/entete';

import { documentationProps, projectProps, etatProps, OutilsProps, userProps } from "@/hooks/interface";

export default function index({props}:{props:{projets: projectProps[], outil: OutilsProps, outils: OutilsProps[], etat: etatProps[], users: userProps[], lastProjets: projectProps[], setPage: (page: string) => void, setLastProjets: (lastProjets: projectProps[]) => void, setArticle: (article: projectProps) => void,user:userProps, setDocumentation: (documentation: documentationProps[]) => void}}) {

    const { projets, outil, outils, etat, users, lastProjets, setPage, user, setLastProjets, setArticle, setDocumentation } = props;

    return (
        <section id="accueil" >
            <Entete props={{projets, outil, outils, etat, users, setPage, setArticle, setDocumentation}} />
            <ListingProjet props={{projets:lastProjets, outils, title:"Projets récemment vus", setPage, user, setLastProjets, setArticle, setDocumentation}} />
            <ListingProjet props={{projets, outils, title:"Tous les projets", setPage, user, setLastProjets, setArticle, setDocumentation}} />
        </section>
    );
}