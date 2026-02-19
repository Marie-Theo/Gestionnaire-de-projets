import Titre from "@/components/page projet/titre";
import Sommaire from "@/components/page projet/sommaire";

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

export default function EnteteArticle({props}:{props:{article:projetProps,outils:any,documentation:any[]}}){

    const { article, outils, documentation } = props;

    return (
        <div className="grid grid-cols-3 gap-5 xl:gap-1">
            <Titre props={{article,outils}}/>
            <Sommaire props={{documentation}}/>
        </div>
    );
}