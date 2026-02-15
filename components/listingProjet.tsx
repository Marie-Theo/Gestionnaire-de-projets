import Projet from '../components/projet';

interface projetProps {
    id: number;
    title: string;
    presentation: string;
    etat: any;
    public: boolean;
}

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: string;
    }[];
}

export default function ListingProjet({props}: {props:{projets: projetProps[], outils: OutilsProps[],title: string}}) {
    const { projets, outils, title } = props;

    return projets.length > 0 ? (
        <section>
            {title?(
                <h2 className='font-bold text-2xl pb-4 pt-5'>{title}</h2>
                ): null}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projets.map((projet) => (
                    <Projet key={projet.id} props={{projet,outils}} />
                ))}
            </div>
        </section>
    ) : null;
}
