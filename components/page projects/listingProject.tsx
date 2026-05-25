import Project from '@/components/page projects/project';

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

export default function ListingProjet({projects, outils,title}: {projects: projetProps[], outils: OutilsProps[],title: string}) {

    return (
        projects.length > 0 ? (
            <section>
                {title?(
                    <h2 className='font-bold text-2xl pb-4 pt-5'>{title}</h2>
                    ): null}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {projects.map(project => (
                        <Project key={project.id} project={project} outils={outils} />
                    ))}
                </div>
            </section>
        ) : null
    );
}