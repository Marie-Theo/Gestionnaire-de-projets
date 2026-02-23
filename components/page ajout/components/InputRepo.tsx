"use react"

import { Input } from "@/components/ui/input";

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
};

export default function InputRepo({ props }: { props: { nouveauArticle: projetProps} }) {

    const { nouveauArticle } = props;

    function inputRepoChangeHandler(e: React.ChangeEvent<HTMLSelectElement>){
        nouveauArticle.repositories = e.target.value;
    }
    
    return (
        <div className='flex gap-2 items-center'>Repositories&nbsp;:
            <Input type="url" onChange={(e)=>{inputRepoChangeHandler(e);}} placeholder="https://github.com/Marie-Theo/Gestionnaire-de-projets" defaultValue={nouveauArticle.repositories} />
        </div>
        );
    }