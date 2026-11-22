"use react"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"

import { projectProps } from "@/hooks/interface";

export default function InputPresentation({ props: { nouveauArticle } }: { props: { nouveauArticle: projectProps} }) {

    function inputChangeHandler(e: React.ChangeEvent<HTMLSelectElement>){
        nouveauArticle.title = e.target.value;
    }

    return (
        <div className="mb-5 text-3xl flex-1">
            <Label htmlFor="presentation">Nom du projet&nbsp;:</Label>
            { nouveauArticle ? (
                <Input className="w-max" id="presentation" type="text" onChange={(e)=>{inputChangeHandler(e);}} defaultValue={nouveauArticle.title} />
            ):(null)
            }
        </div>
        );
    }