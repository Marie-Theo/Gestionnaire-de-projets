import updateLastSeen from "@/components/requet bdd/updateLastSeen";
import fetchLastSeenProjet from "@/components/fetch/fetchLastSeenProjet";

interface userProps {
    id: number;
    name: string;
    mdp: string;
    theme: string;
    presentation:string;
    created_at: string;
}

export default function Article({props}: {props: { projets: any[], outil: any[], outils: any[], etat: any[], users: userProps[], user: userProps, lastProjets: any[], setPage: (page: string) => void, projetN: number, setProjetN: (projetN: number) => void, setProjets: (projets: any[]) => void, setLastProjets: (lastProjets: any[]) => void}}) {

    const { projets, outil, outils, etat, users, user, lastProjets, setPage, projetN, setProjetN, setProjets, setLastProjets } = props;

    if (projetN === 0) {
        setPage("projets");
    }

    updateLastSeen(projetN);
    fetchLastSeenProjet(user.id, setLastProjets);

    return (
        <div></div>
    );
}