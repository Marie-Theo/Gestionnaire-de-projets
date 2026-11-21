"use client"

import { Dispatch, SetStateAction, useEffect } from "react"
import Select from '@/components/page ajout/components/select';
import SelectList from '@/components/page ajout/components/selectEtat';
import SelectBadges from '@/components/page ajout/components/selectBadges';
import InputRepo from '@/components/page ajout/components/InputRepo';
import InputTitle from '@/components/page ajout/components/InputTitle';
import InputDesc from '@/components/page ajout/components/inputDesc';

import { projectProps, etatProps, OutilProps } from "@/hooks/interface";

export default function Titre({props}:{props:{nouveauArticle:projectProps, setNouveauArticle: (nouveauArticle: projectProps) => void, outil:OutilProps[], etat:etatProps[], nouveauOutils:any[], setNouveauOutils: Dispatch<SetStateAction<string[]>> }}){

    const {nouveauArticle,setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils} = props;

    let tableau:string[] = [];

    useEffect(()=>{
        if (outil!=0){
            outil?.forEach(element => {
                tableau.push(element.name);
            });
        }
    },[outil])

    return(
        <div className="col-span-3 xl:col-span-2 pr-5">
            <title>{ nouveauArticle?.title ? nouveauArticle.title:"Création d'un projet"}</title>
            <div className="flex-none content-center gap-1 flex items-center">
                <InputTitle props={{nouveauArticle}}/>
                <SelectBadges nouveauOutils={nouveauOutils} outils={tableau} setNouveauOutils={setNouveauOutils} /> 
                <SelectList props={{nouveauArticle,etat}} />
                <Select props={{nouveauArticle}} />
            </div>
            <InputDesc props={{nouveauArticle}}/>
            <InputRepo props={{nouveauArticle}}/>
        </div>
    );
}