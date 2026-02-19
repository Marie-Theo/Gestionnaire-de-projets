import Entete from "@/components/page projet/entete";

interface userProps {
    id: number;
    name: string;
    mdp: string;
    theme: string;
    presentation:string;
    created_at: string;
}

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

export default function Article({props}: {props: { outil: any[], outils: any[], etat: any[], users: userProps[], user: userProps, setPage: (page: string) => void, article:projetProps, setArticle: (article: projetProps) => void, documentation:any[]}}) {

    const { outil, outils, etat, users, user, setPage, article, setArticle, documentation } = props;

    return (
        <div>
            <Entete props={{article, outils, documentation}}/>
        </div>
    );
}