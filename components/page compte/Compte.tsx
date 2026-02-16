import ListingProjet from "@/components/page projets/listingProjet";  
import Entete from "@/components/page compte/entete"

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
}

interface userProps {
    id: number;
    mdp: string;
    name: string;
    theme: string;
    created_at: string;
}


export default function Compte ({props} : {props:{projetUser:projetProps[], outils:any[],user:userProps, projetN:any, setProjetN: (projetN: number) => void, setPage: (page: string) => void, lien:any}}) {

    const { projetUser, outils, user, projetN, setProjetN, setPage, lien } = props;

    return(
        <section id="compte">
            <Entete props={{lien,user}}/>
            <ListingProjet props={{projets:projetUser, outils, title:`Mes projet :`, projetN, setProjetN, setPage}} />
        </section>
    );
}