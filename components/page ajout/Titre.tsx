"use client"

import { Badge } from "@/components/ui/badge";
import {  Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxChips, ComboboxValue, ComboboxChipsInput, ComboboxChip } from "@/components/ui/combobox";
import { tools } from "@/components/tools";
import BadgesOutils from "@/components/page projets/components/badgesOutils";
import { Input } from "@base-ui/react";

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

export default function Titre({props}:{props:{nouveauArticle:projetProps, setNouveauArticle: (nouveauArticle: projetProps) => void, outil:OutilsProps, etat:etatProps, nouveauOutils:any[], setNouveauOutils: (nouveauOutils: any[]) => void}}){

    const {nouveauArticle,setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils} = props;

    let tableau:string[] = [];

    outil.forEach(element => {
        tableau.push(element.name);
    });

    return(
        <div className="col-span-3 xl:col-span-2 pr-5">
            { nouveauArticle.title != '' ?(<title>{nouveauArticle.title}</title>):null}
            <div className="flex">
                <div className="text-3xl flex-1">{nouveauArticle.title}</div>
                <div className="flex-none content-center flex flex-wrap gap-1">
                    <BadgesOutils props={{id_projet:nouveauArticle.id,outils:nouveauOutils}} />
                    <Badge variant="outline" className={tools.defineBadgecolor(nouveauArticle.etat[0].couleur)}>{nouveauArticle.etat[0].name}</Badge> 
                    <Badge variant="outline" className={tools.definePublicBadgeColor(nouveauArticle.public)}>{nouveauArticle.public ? 'Public' : 'Privé'}</Badge>
                </div>
            </div>
            <div className="p-4">&emsp;{nouveauArticle.presentation}</div>
            { nouveauArticle.repositories != null ?(
                <div>Repositories :&nbsp;
                    <a href={nouveauArticle.repositories} className="text-blue-500 hover:text-blue-600 hover:underline underline-offset-0" target="_blank">
                        {nouveauArticle.repositories}
                    </a>
                </div>
            ):null}
        </div>
    );
}