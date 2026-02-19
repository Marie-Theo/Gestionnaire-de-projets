import ListingProjet from '@/components/page projets/listingProjet';
import Entete from '@/components/page projets/entete';

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
    };
    id_user: number;
    public: boolean;
}[]

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: any;
    }[];
}

interface userProps {
    id: number;
    created_at: string;
    name: string;
    theme: string;
}

export default function index({props}:{props:{projets: projetProps[], outil: any, outils: OutilsProps[], etat: any, users: userProps[], lastProjets: projetProps[], setPage: (page: string) => void, setLastProjets: (lastProjets: any[]) => void, setArticle: (article: projetProps[]) => void,user:any}}) {

    const { projets, outil, outils, etat, users, lastProjets, setPage, user, setLastProjets, setArticle } = props;

    return (
        <section id="accueil" >
            <Entete props={{projets, outil, outils, etat, users, setPage}} />
            <ListingProjet props={{projets:lastProjets, outils, title:"Projets récemment vus", setPage, user, setLastProjets, setArticle}} />
            <ListingProjet props={{projets, outils, title:"Tous les projets", setPage, user, setLastProjets, setArticle}} />
        </section>
);
}