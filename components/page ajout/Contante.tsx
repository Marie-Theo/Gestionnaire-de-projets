"use client"

import { Textarea } from "@/components/ui/textarea";
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

export default function contante({props}:{props:{nouvelDocumentation:documentationProps[], setNouvelDocumentation: Dispatch<SetStateAction<documentationProps[]>>,categorie:categorieProps[],setCategorie: Dispatch<SetStateAction<categorieProps[]>>}}){

    const {nouvelDocumentation, setNouvelDocumentation, categorie, setCategorie} = props;
    let lastCategorie:any = null;
    
    function inputChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>, index: number){
        const updatedDocumentation = [...nouvelDocumentation];
        updatedDocumentation[index].text = e.target.value;
        setNouvelDocumentation(updatedDocumentation);
    }

    return (
        <div>
            {nouvelDocumentation.map((section, index) => (
                <div key={section.id}>
                    { nouvelDocumentation[index].id_categorie.text != lastCategorie ?(
                        lastCategorie = nouvelDocumentation[index].id_categorie.text,
                        <div className="min-w-[40%] w-min mt-10" id={nouvelDocumentation[index].id_categorie.text.toString()}>
                            <ChoixCategorie props={{nouvelDocumentation, sectionIndex:index, categorie, setCategorie, setNouvelDocumentation}} />
                        </div>
                    ):null}
                    { nouvelDocumentation[index].id_categorie.text != "" ?(
                        <div className="m-5">
                            <Textarea onChange={(e)=>{inputChangeHandler(e, index);}} placeholder="..." defaultValue={nouvelDocumentation[index].text} />
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
}