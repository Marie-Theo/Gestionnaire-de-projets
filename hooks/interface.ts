interface documentationProps {
    id:number;
    id_categorie:{
        id:number;
        text:string;
        ordre:number;
        style:number;
    };
    text:string;
}

interface etatProps {
    id:number;
    name: string;
    couleur: string;
};

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: OutilProps;
};

interface OutilProps {
    id?: number;
    name: string;
};

interface projectProps {
    id: number;
    created_at: string;
    seen_at: string;
    title: string;
    presentation: string;
    repositories: string;
    etat: {
        name: string;
        couleur: string
    };
    id_user: number;
    public: boolean;
}

interface categorieProps {
    id:number;
    text:string;
    ordre:number;
    style:number;
};

interface userProps {
    id: number;
    name: string;
    mdp?: string;
    theme: string;
    presentation?:string;
    created_at: string;
};

interface lienProps {
    id:number;
    site: {
        id:number;
        site:string;
    } | null;
    url:string;
};
export type { documentationProps, projectProps, etatProps, OutilsProps, OutilProps, categorieProps, lienProps, userProps }