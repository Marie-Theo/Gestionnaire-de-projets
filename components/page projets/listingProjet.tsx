import Projet from '@/components/page projets/projet';

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

export default function ListingProjet({props}: {props:{projets: projetProps[], outils: OutilsProps[],title: string, setPage: (page: string) => void, setLastProjets: (lastProjets: any[]) => void, setArticle: (article: projetProps[]) => void,user:any}}) {
    const { projets, outils, title, setPage, user, setLastProjets, setArticle } = props;

    return projets.length > 0 ? (
        <section>
            {title?(
                <h2 className='font-bold text-2xl pb-4 pt-5'>{title}</h2>
                ): null}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projets.map((projet) => (
                    <Projet key={projet.id} props={{projet,outils,setPage, user, setLastProjets, setArticle}} />
                ))}
            </div>
        </section>
    ) : null;
}
