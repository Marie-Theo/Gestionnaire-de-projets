"use client"

import { Card } from "@/components/ui/card";
import { Dispatch, SetStateAction } from "react";
import ChoixCategorie from "@/components/page ajout/components/choixCatégorie";

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

interface categorieProps {
    id:number;
    text:string;
    ordre:number;
    style:number;
};

export default function contante({props}:{props:{nouvelDocumentation:documentationProps[], setNouvelDocumentation: (nouvelDocumentation: documentationProps[]) => void,categorie:categorieProps[],setCategorie: Dispatch<SetStateAction<categorieProps[]>>}}){

    const {nouvelDocumentation, setNouvelDocumentation, categorie, setCategorie} = props;
    const obj = {temps:''};

    return (
        <div>
            {nouvelDocumentation.map((section, index) => (
                <div key={section.id}>
                    { section.id_categorie.text != obj.temps ?(
                        <div className="min-w-[40%] w-min mt-10">
                            <ChoixCategorie props={{defaultText:section.id_categorie.text, sectionIndex:index, categorie, setCategorie, setNouvelDocumentation}} />
                        </div>
                    ):null}
                    <div>
                        { section.id_categorie.style == 1 ?(
                            <div className="m-5">&emsp;{section.text}</div>
                        ) : section.id_categorie.style == 2 ?(
                            <Card className="m-3 ml-5 p-3">{section.text}</Card>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
}