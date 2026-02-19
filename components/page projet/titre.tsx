import { Badge } from "@/components/ui/badge";
import { tools } from "@/components/tools";
import BadgesOutils from "@/components/page projets/components/badgesOutils";

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

export default function Titre({props}:{props:{article:projetProps[],outils:any}}){

    const { article, outils } = props;
    
    return (
        <div className="col-span-3 xl:col-span-2 pr-5">
            {article.id != 0 ?(
                <div>
                    <title>{article[0].title}</title>
                    <div className="flex">
                        <div className="text-2xl flex-1">{article[0].title}</div>
                        <div className="flex-none content-center flex flex-wrap gap-1">
                            <BadgesOutils props={{id_projet:article[0].id,outils}} />
                            <Badge variant="outline" className={tools.defineBadgecolor(article[0].etat.couleur)}>{article[0].etat.name}</Badge> 
                            <Badge variant="outline" className={tools.definePublicBadgeColor(article[0].public)}>{article[0].public ? 'Public' : 'Privé'}</Badge>
                        </div>
                    </div>
                    <div className="p-4">&emsp;{article[0].presentation}</div>
                    { article[0].repositories != null ?(
                        <div>Repositories :&nbsp;
                            <a href={article[0].repositories} className="text-blue-500 hover:text-blue-600 hover:underline underline-offset-0" target="_blank">
                                {article[0].repositories}
                            </a>
                        </div>
                    ):null}
                </div>
            ):'chargement'}
        </div>
    );
}