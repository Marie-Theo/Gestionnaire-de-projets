"use client"

import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { tools } from "@/components/page ajout/toolsNewDoc";
import ChoixCategorie from "@/components/page ajout/components/choixCatégorie";
import InputText from "@/components/page ajout/components/inputText";

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

export default function contante({props}:{props:{nouvelDocumentation:documentationProps[], setNouvelDocumentation: Dispatch<SetStateAction<documentationProps[]>>,categorie:categorieProps[],setCategorie: Dispatch<SetStateAction<categorieProps[]>>}}){

    const {nouvelDocumentation, setNouvelDocumentation, categorie, setCategorie} = props;
    let lastCategorie:any = null;
    
    return (
        <div>
            {nouvelDocumentation.map((section, index) => (
                <div key={section.id}>
                    { nouvelDocumentation[index].id_categorie.text != lastCategorie ?(
                        lastCategorie = nouvelDocumentation[index].id_categorie.text,
                        <div className="min-w-[40%] w-min mt-10 flex gap-1" id={nouvelDocumentation[index].id_categorie.text.toString()}>
                            <ChoixCategorie props={{nouvelDocumentation, sectionIndex:index, categorie, setCategorie, setNouvelDocumentation}} />
                            <Button variant="ghost"
                                onClick={() => {
                                    const newIndex = tools.countArray(
                                        nouvelDocumentation,
                                        nouvelDocumentation[index].id_categorie.text
                                    );
                                    tools.InsertDoc(nouvelDocumentation, setNouvelDocumentation, newIndex);
                            }}>
                                +
                            </Button>
                        </div>
                    ) : null}
                    { nouvelDocumentation[index].id_categorie.text != "" ?(
                        <InputText nouvelDocumentation={nouvelDocumentation} index={index} setNouvelDocumentation={setNouvelDocumentation} />
                    ) : null}
                </div>
            ))}
            { nouvelDocumentation[nouvelDocumentation.length - 1].id_categorie.text != "" ?(
                <Button variant="ghost" className="w-full mt-2" onClick={()=>tools.InsertNewLastDoc(nouvelDocumentation, setNouvelDocumentation)}>+</Button>
            ) : null}
        </div>
    );
}