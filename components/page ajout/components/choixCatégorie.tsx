"use client"

"------- creatable combobox Créer avec chat gpt -------"

import { Dispatch, SetStateAction } from "react";
import { Combobox,ComboboxContent,ComboboxEmpty,ComboboxItem,ComboboxList,ComboboxInput } from "@/components/ui/combobox";

interface categorieProps {
    id: number;
    text: string;
    ordre: number;
    style: number;
}

interface documentationProps {
    id:number;
    id_categorie:{
        id:number;
        text:string;
        ordre:number;
        style:number;
    }[];
    text:string;
}


export default function ChoixCategorie({props}: {props: {defaultText: string, sectionIndex: number, categorie: categorieProps[],setCategorie: Dispatch<SetStateAction<categorieProps[]>>, setNouvelDocumentation: Dispatch<SetStateAction<documentationProps[]>>}}) {
    const { defaultText, sectionIndex, categorie, setCategorie, setNouvelDocumentation } = props

    function handleCreate(value: string) {
        const trimmed = value.trim()
        if (!trimmed) return

        if (!categorie.some(c => c.text === trimmed)) {
        setCategorie(prev => [
            ...prev,
            {
            id: Date.now(),
            text: trimmed,
            ordre: prev.length + 1,
            style: 0
            }
        ])
        }
    }

    function handleSelect(selectedText: string) {
        const selectedCategorie = categorie.find(
            c => c.text === selectedText
        )

        if (!selectedCategorie) return

        setNouvelDocumentation(prev =>
            prev.map((doc, index) => {
            if (index !== sectionIndex) return doc

            return {
                ...doc,
                id_categorie: [selectedCategorie]
            }
            })
        )
    }

    return (    
        <Combobox items={categorie.map(c => c.text)} value={defaultText} onValueChange={(value) => handleSelect(value)}>
            <ComboboxInput
                placeholder="Select a category"
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    handleCreate((e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = "";
                }
                }}
            />
            <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>

                <ComboboxList>
                {(item) => (
                    <ComboboxItem key={item} value={item}>
                    {item}
                    </ComboboxItem>
                )}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    )
}