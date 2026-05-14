import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BadgesOutils from "./components/badgesOutils";
import { tools } from "@/components/tools";
import updateLastSeen from "@/components/requet bdd/updateLastSeen";
import fetchLastSeenProject from "@/hooks/fetch/fetchLastSeenProject";
import fetchArticle from "@/hooks/fetch/fetchArticle";
import fetchDocumentation from "@/hooks/fetch/fetchDocumentation";

interface projectProps {
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
    id_project: number;
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

export default function Project({project, outils, user}: {project: projectProps, outils: OutilsProps[],user:userProps}) {

    const id_project = project.id;

    function clickPorjet(){
        updateLastSeen(project.id);
        fetchLastSeenProject(user.id, setLastProjects);
        fetchArticle(project.id, setArticle);
        fetchDocumentation(project.id, setDocumentation);
    }

    return (
        <Card className="pt-4 mb-4 relative pb-17 gap- hover:shadow-lg transition-shadow duration-300 lg:scale-100 hover:lg:scale-[100.5%] hover:cursor-pointer" onClick={() => {clickPorjet()}}>
            <CardHeader>
                <CardAction>
                    <Badge variant="outline" className={tools.defineBadgecolor(project.etat.couleur)}>{project.etat.name}</Badge> 
                    <Badge variant="outline" className={tools.definePublicBadgeColor(project.public)}>{project.public ? 'Public' : 'Privé'}</Badge>
                </CardAction>
                <CardTitle className="hover:underline underline-offset-1">{project.title}</CardTitle>
            </CardHeader>
            <CardDescription className="pl-6 pr-5">&emsp;{''+project.presentation}</CardDescription>
            <CardFooter className="absolute bottom-3 flex flex-wrap gap-1">
                <BadgesOutils props={{id_project,outils}} />
            </CardFooter>
        </Card>
    );
}