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
    }
}

export default function ListingProjet({props}: {props:{projets: projetProps[], outils: OutilsProps[]}}) {
    const { projets, outils } = props;

    return projets.length > 0 ? (
        projets.map((projet) =>
            <Projet key={projet.id} props={{projet,outils}} />
        )
    ) : null;
}
