"use client"

import { Dispatch, SetStateAction } from "react"
import Select from '@/components/page ajout/components/select';
import SelectList from '@/components/page ajout/components/selectEtat';
import SelectBadges from '@/components/page ajout/components/selectBadges';
import InputRepo from '@/components/page ajout/components/InputRepo';
import InputTitle from '@/components/page ajout/components/inputTitle';
import InputDesc from '@/components/page ajout/components/inputDesc';

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
    name: string,
    couleur: string
}

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: any;
    }[];
}

export default function Titre({props}:{props:{nouveauArticle:projetProps, setNouveauArticle: (nouveauArticle: projetProps) => void, outil:OutilsProps, etat:etatProps[], nouveauOutils:any[], setNouveauOutils: Dispatch<SetStateAction<string[]>> }}){

    const {nouveauArticle,setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils} = props;

    let tableau:string[] = [];

    outil.forEach(element => {
        tableau.push(element.name);
    });

    console.log(nouveauArticle);

    return(
        <div className="col-span-3 xl:col-span-2 pr-5">
            <title>{ nouveauArticle.title != '' ?nouveauArticle.title:"Création d'un projet"}</title>
            <div className="flex">
                <div className="text-3xl flex-1">{nouveauArticle.title}</div>
                <div className="flex-none content-center flex gap-1">
                    <SelectBadges props={{nouveauOutils, outils:tableau,setNouveauOutils}} /> 
                    <div className="flex items-center">
                        <SelectList props={{nouveauArticle,etat}} />
                        <Select props={{nouveauArticle}} />
                    </div>
                </div>
            </div>
            <div className="p-4">&emsp;{nouveauArticle.presentation}</div>
            <InputRepo props={{nouveauArticle}}/>
        </div>
    );
}