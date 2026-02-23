"use react"

import { useEffect, useState } from "react";

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

interface etatProps {
    id:number;
    name:string;
    couleur:string;
};

export default function SelectList({ props }: { props: { nouveauArticle: projetProps, etat:etatProps[] } }) {

    const { nouveauArticle, etat } = props;

    const [etatSelect, setEtatSelect] = useState<string>(nouveauArticle.etat[0].name);


    // Initialisation propre
    useEffect(() => {
        if (nouveauArticle.etat[0]?.name) {
            setEtatSelect(nouveauArticle.etat[0].name);
        } else if (etat.length > 0) {
            setEtatSelect(etat[0].name);
        }
    }, [etat, nouveauArticle]);

    function selectChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setEtatSelect(value);
        nouveauArticle.etat[0].name = value ;

        const x : any = etat.find((element:any)=> element.name == value)?.couleur;
        nouveauArticle.etat[0].couleur = x;
    }

    const colors = {
        red: 'bg-red-100 border-red-400 text-red-900',
        green: 'bg-green-100 border-green-400 text-green-900',
        blue: 'bg-blue-100 border-blue-400 text-blue-900',
        yellow: 'bg-yellow-100 border-yellow-400 text-yellow-900',
        purple: 'bg-purple-100 border-purple-400 text-purple-900',
        pink: 'bg-pink-100 border-pink-400 text-pink-900',
        orange: 'bg-orange-100 border-orange-400 text-orange-900',
        teal: 'bg-teal-100 border-teal-400 text-teal-900',
        cyan: 'bg-cyan-100 border-cyan-400 text-cyan-900',
        indigo: 'bg-indigo-100 border-indigo-400 text-indigo-900'
    };

    if (nouveauArticle.etat[0].name == '' && etat.length > 0 ) {
        nouveauArticle.etat[0].name = etat[0].name;
        setEtatSelect(etat[0].name);
        nouveauArticle.etat[0].couleur = etat[0].couleur;
    }
    
    return (
        <select
        value={etatSelect}
        onChange={(e)=>{selectChangeHandler(e);}}
        className={'inline-flex items-center justify-center rounded-full border px-0.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground ml-1 ' + colors[etat.find((element:any)=> element.name == etatSelect)?.couleur as keyof typeof colors]}
        >
        {etat.map((element)=>(
            <option key={element.id} value={element.name} className={colors[etat.find((etatElement:any)=> etatElement.name == element.name)?.couleur as keyof typeof colors]}>{element.name}</option>
        ))}
        </select>
    )
}