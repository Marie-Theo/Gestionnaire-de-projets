"use client"

import { tools } from "@/components/page ajout/toolsNewDoc";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function inputText({nouvelDocumentation, index, setNouvelDocumentation}: {nouvelDocumentation: any[], index: number, setNouvelDocumentation: (docs: any[]) => void}){
    
    function inputChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>, index: number){
        const updatedDocumentation = [...nouvelDocumentation];
        updatedDocumentation[index].text = e.target.value;
        setNouvelDocumentation(updatedDocumentation);
    }

    return (
        <div className="m-5 mb-2 flex gap-2">
            <Textarea
                className="w-full min-h-28"
                onChange={(e)=>{inputChangeHandler(e, index);}}
                placeholder="..."
                defaultValue={nouvelDocumentation[index].text}
            />
            { nouvelDocumentation.length > 1 ? (
                <div className="flex flex-col gap-2">
                    <Button
                        variant="destructive"
                        className="max-h-8 w-10 p-2"
                        onClick={() => {tools.removeArray(nouvelDocumentation, setNouvelDocumentation, index);
                    }}>X</Button>
                    <Button
                        variant="outline"
                        className="max-h-8 max-w-16 p-2"
                        onClick={() => {tools.changeOrderArray(nouvelDocumentation, setNouvelDocumentation, index);
                    }}>▲</Button>
                    <Button
                        variant="outline"
                        className="max-h-8 max-w-16 p-2"
                        onClick={() => {tools.changeOrderArray(nouvelDocumentation, setNouvelDocumentation, index + 1);
                    }}>▼</Button>
                </div>
            ) : null }
        </div>
    );
}