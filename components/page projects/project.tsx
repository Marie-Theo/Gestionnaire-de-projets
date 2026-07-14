import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BadgesOutils from "./components/badgesOutils";
import { tools } from "@/components/tools";

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

export default function Project({project, outils}: {project: projectProps, outils: OutilsProps[]}) {

    const id_project : number = project.id;

    return (
        <a href={`/project/${id_project}`} className="h-min mb-4">
            <Card className="pt-4 relative pb-17 gap- hover:shadow-lg transition-shadow duration-300 lg:scale-100 hover:lg:scale-[100.5%] hover:cursor-pointer">
                <CardHeader>
                    <CardAction>
                        <Badge variant="outline" className={tools.defineBadgecolor(project.etat.couleur)}>{project.etat.name}</Badge> 
                        <Badge variant="outline" className={tools.definePublicBadgeColor(project.public)}>{project.public ? 'Public' : 'Privé'}</Badge>
                    </CardAction>
                    <CardTitle className="hover:underline underline-offset-1">{project.title}</CardTitle>
                </CardHeader>
                <CardDescription className="pl-6 pr-5">&emsp;{''+project.presentation}</CardDescription>
                <CardFooter className="absolute bottom-3 flex flex-wrap gap-1">
                    <BadgesOutils id={id_project} outils={outils[0]} />
                </CardFooter>
            </Card>
        </a>
    );
}