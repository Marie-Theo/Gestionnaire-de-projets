import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BadgesOutils from "./components/badgesOutils";
import { tools } from "@/components/tools";
import updateLastSeen from "@/components/requet bdd/updateLastSeen";
import fetchLastSeenProjet from "@/hooks/fetch/fetchLastSeenProjet";
import fetchArticle from "@/hooks/fetch/fetchArticle";
import fetchDocumentation from "@/hooks/fetch/fetchDocumentation";

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
}

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: string;
    }[];
}

interface userProps {
    id: number;
    name: string;
    mdp: string;
    theme: string;
    presentation:string;
    created_at: string;
}

export default function Projet({props}: {props:{projet: projetProps, outils: OutilsProps[], setPage: (page: string) => void, setLastProjets: (lastProjets: any[]) => void, setArticle: (article: projetProps) => void,user:userProps, setDocumentation: (documentation: any[]) => void}}) {

    const { projet, outils, setPage, user, setLastProjets, setArticle, setDocumentation } = props;
    const id_projet = projet.id;


    function clickPorjet(){
        setPage("projet");
        updateLastSeen(projet.id);
        fetchLastSeenProjet(user.id, setLastProjets);
        fetchArticle(projet.id, setArticle);
        fetchDocumentation(projet.id, setDocumentation);
    }

    return (
    <Card className="pt-4 mb-4 relative pb-17 gap- hover:shadow-lg transition-shadow duration-300 lg:scale-100 hover:lg:scale-[100.5%] hover:cursor-pointer" onClick={() => {clickPorjet()}}>
            <CardHeader>
                <CardAction>
                    <Badge variant="outline" className={tools.defineBadgecolor(projet.etat.couleur)}>{projet.etat.name}</Badge> 
                    <Badge variant="outline" className={tools.definePublicBadgeColor(projet.public)}>{projet.public ? 'Public' : 'Privé'}</Badge>
                </CardAction>
                <CardTitle className="hover:underline underline-offset-1">{projet.title}</CardTitle>
            </CardHeader>
            <CardDescription className="pl-6 pr-5">&emsp;{''+projet.presentation}</CardDescription>
            <CardFooter className="absolute bottom-3 flex flex-wrap gap-1">
                <BadgesOutils props={{id_projet,outils}} />
            </CardFooter>
    </Card>);
}