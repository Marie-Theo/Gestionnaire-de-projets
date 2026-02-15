import ListingProjet from '../components/listingProjet';
import Entete from '../components/entete';

interface projetProps {
    id: number;
    title: string;
    presentation: string;
    etat: any;
    public: boolean;
}

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

export default function index({props}:{props:{projets: projetProps[], outil: any, outils: OutilsProps[], etat: any, users: userProps[], lastProjets: projetProps[], setPage: (page: string) => void}}) {

    const { projets, outil, outils, etat, users, lastProjets, setPage } = props;
    return (
        <section id="accueil" >
            <Entete props={{projets, outil, outils, etat, users, setPage}} />
            <ListingProjet props={{projets:lastProjets, outils, title:"Projets récemment vus"}} />
            <ListingProjet props={{projets, outils, title:"Tous les projets"}} />
        </section>
);
}