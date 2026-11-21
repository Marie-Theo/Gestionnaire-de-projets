"use react"

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"

import { projectProps } from "@/hooks/interface";

export default function InputPresentation({ props }: { props: { nouveauArticle: projectProps} }) {

    const { nouveauArticle } = props;

    function inputChangeHandler(e: React.ChangeEvent<HTMLSelectElement>){
        nouveauArticle.presentation = e.target.value;
    }
    
    return (
        <div className="mb-5">
            <Label htmlFor="presentation" className="mb-2">Presentation du projet&nbsp;:</Label>
            <Textarea id="presentation" onChange={(e)=>{inputChangeHandler(e);}} placeholder="Ce projet à pour but ..." defaultValue={nouveauArticle?.presentation} />
        </div>
    );
}