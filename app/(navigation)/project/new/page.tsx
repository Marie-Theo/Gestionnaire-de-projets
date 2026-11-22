'use client'

import { useState } from "react"
import { Save, Trash } from "lucide-react";
import { Button } from '@/components/ui/button';
import Entete from "@/components/page ajout/Entete";
import Contante from "@/components/page ajout/Contante";
import CreateNewProject from "@/hooks/newProject";

export default function New(){
    const [error, setError] = useState<boolean|null>(null);
    const [tryToSave, setTryToSave] = useState<boolean>(false);

    const {outil, etat, categorie, setCategorie, nouveauArticle, setNouveauArticle, nouvelDocumentation, setNouvelDocumentation, nouveauOutils, setNouveauOutils} = CreateNewProject();

    async function saveData(){
        setTryToSave(true);
        console.log(nouveauArticle);
        console.log(outil);
        console.log(nouveauOutils);
        console.log(nouvelDocumentation);
        console.log(categorie);
        try {
            const save = await fetch("/api/projects/new", {
                method:"POST"
            });
            if (!save.ok){
                setError(true);
            } else {
                // window.location.href=`/project/${nouveauArticle.id}`;
            }
        } catch (error){
            console.log(error);
        }
        setTryToSave(false);
    }

    return (
        <div>
            <Entete props={{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils, nouvelDocumentation, setNouvelDocumentation}}/>
            <Contante props={{nouvelDocumentation, setNouvelDocumentation,categorie,setCategorie}} />
            <div className='flex justify-end gap-2'>
                <Button className="select-none hover:cursor-pointer" variant={"destructive"} onClick={()=>{if (confirm("Voulez vous vraiment le suprimé ?")){console.log("suprimé")}else{console.log("cancel")}}}><Trash />Delete</Button>
                <Button className="select-none hover:cursor-pointer" onClick={()=>{saveData()}} disabled={tryToSave}><Save />Save</Button>
            </div>
        </div>
    );
}