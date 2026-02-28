"use client"

// creatable combobox Créer avec chat gpt 

import { Dispatch, SetStateAction, useState, useEffect } from "react"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList, ComboboxChips, ComboboxValue, ComboboxChipsInput, ComboboxChip, useComboboxAnchor } from "@/components/ui/combobox";
export default function SelectBadges({ nouveauOutils, outils, setNouveauOutils}: {  nouveauOutils: string[],  outils: string[],  setNouveauOutils: Dispatch<SetStateAction<string[]>>}) {

    const anchor = useComboboxAnchor()
  
    const [items, setItems] = useState<string[]>([])

    useEffect(() => {
    if (outils.length > 0) {
        setItems(prev => {
        const merged = [...new Set([...prev, ...outils])]
        return merged
        })
    }
    }, [outils])

    function handleCreate(value: string) {
        const trimmed = value.trim()

        if (!trimmed) return

        if (!items.includes(trimmed)) {
        setItems(prev => [...prev, trimmed])
        }

        if (!nouveauOutils.includes(trimmed)) {
            setNouveauOutils(prev => [...prev, trimmed])
        }
    }

    return (
        <Combobox
            multiple
            items={items}
            value={nouveauOutils}
            onValueChange={setNouveauOutils}
        >
            <ComboboxChips ref={anchor} className="w-full max-w-xs">
                <ComboboxValue>
                {(values) => (
                    <>
                    {values.map((value: string) => (
                        <ComboboxChip key={value}>{value}</ComboboxChip>
                    ))}

                    <ComboboxChipsInput
                        onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleCreate((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = "";
                        }
                        }}
                    />
                    </>
                )}
                </ComboboxValue>
            </ComboboxChips>

            <ComboboxContent anchor={anchor}>
                <ComboboxEmpty>
                Appuyez sur Entrée pour ajouter
                </ComboboxEmpty>

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