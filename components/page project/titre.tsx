import { Badge } from "@/components/ui/badge";
import { tools } from "@/components/tools";
import BadgesOutils from "@/components/page projects/components/badgesOutils";

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: string;
    }[];
}

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

export default function Titre({project, outils}:{project:projectProps,outils:OutilsProps[]}){

    return (
        <div className="col-span-3 xl:col-span-2 pr-5">
            {project.id != 0 ?(
                <div>
                    <title>{project.title}</title>
                    <div className="flex">
                        <div className="text-3xl flex-1">{project.title}</div>
                        <div className="flex-none content-center flex flex-wrap gap-1">
                            <BadgesOutils id={project.id} outils={outils} />
                            <Badge variant="outline" className={tools.defineBadgecolor(project.etat.couleur)}>{project.etat.name}</Badge> 
                            <Badge variant="outline" className={tools.definePublicBadgeColor(project.public)}>{project.public ? 'Public' : 'Privé'}</Badge>
                        </div>
                    </div>
                    <div className="p-4">&emsp;{project.presentation}</div>
                    { project.repositories != null ?(
                        <div>Repositories :&nbsp;
                            <a href={project.repositories} className="text-blue-500 hover:text-blue-600 hover:underline underline-offset-1" target="_blank">
                                {project.repositories}
                            </a>
                        </div>
                    ):null}
                </div>
            ):'chargement'}
        </div>
    );
}