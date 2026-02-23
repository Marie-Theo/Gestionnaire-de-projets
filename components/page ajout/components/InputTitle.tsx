"use react"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

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

export default function InputPresentation({ props }: { props: { nouveauArticle: projetProps} }) {

    const { nouveauArticle } = props;

    function inputChangeHandler(e: React.ChangeEvent<HTMLSelectElement>){
        nouveauArticle.title = e.target.value;
    }
    
    return (
        <div className="mb-5 text-3xl flex-1">
            <Label htmlFor="presentation" className="mb-2">Nom du projet&nbsp;:</Label>
            <Input id="presentation" type="text" onChange={(e)=>{inputChangeHandler(e);}} placeholder="" defaultValue={nouveauArticle.title} />
        </div>
        );
    }