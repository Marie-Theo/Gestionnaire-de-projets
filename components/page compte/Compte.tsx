import ListingProjet from "@/components/page projets/listingProjet";  
import Entete from "@/components/page compte/entete";
import { tools } from "@/components/tools";

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

interface lienProps {
    id:number;
    site: {
        id:number;
        site:string;
    } | null;
    url:string;
}

export default function Compte ({props} : {props:{projetUser:projetProps[], setProjetUser: (projetUser: projetProps[]) => void, outils:any[],user:userProps, projetN:any, setProjetN: (projetN: number) => void, setPage: (page: string) => void, lien:lienProps[]}}) {

    const { projetUser, setProjetUser, outils, user, projetN, setProjetN, setPage, lien } = props;

    return(
        <section id="compte">
            <Entete props={{lien,user}}/>
            <ListingProjet props={{projets:projetUser, outils, title:`Projet${tools.pluralize(projetUser.length)} :`, projetN, setProjetN, setPage}} />
        </section>
    );
}