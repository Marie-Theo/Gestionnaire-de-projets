"use react"

import { Input } from "@/components/ui/input";

import { projectProps } from "@/hooks/interface";

export default function InputRepo({ props }: { props: { nouveauArticle: projectProps} }) {

    const { nouveauArticle } = props;

    function inputRepoChangeHandler(e: React.ChangeEvent<HTMLSelectElement>){
        nouveauArticle.repositories = e.target.value;
    }
    
    return (
        <div className='flex gap-2 items-center'>Repositories&nbsp;:
            <Input type="url" onChange={(e)=>{inputRepoChangeHandler(e);}} placeholder="https://github.com/Marie-Theo/Gestionnaire-de-projets" defaultValue={nouveauArticle?.repositories} />
        </div>
        );
    }