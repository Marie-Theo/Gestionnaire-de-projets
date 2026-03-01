"use client"

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

export const tools = {
    InsertDoc: (nouvelDocumentation: documentationProps[], setNouvelDocumentation: (docs: documentationProps[]) => void, index: number) => {
        const newDocs = [...nouvelDocumentation];
        newDocs.splice(index + 1, 0, {id: Date.now() + Math.random(), id_categorie: { ...nouvelDocumentation[index].id_categorie }, text: ''});
        setNouvelDocumentation(newDocs);
    },
    InsertNewLastDoc: (nouvelDocumentation: documentationProps[], setNouvelDocumentation: (docs: documentationProps[]) => void) => {
        const newDocs = [...nouvelDocumentation];
        newDocs.push({id: Date.now() + Math.random(), id_categorie: {id: 0, text: '', ordre: 0, style: 0}, text: ''});
        setNouvelDocumentation(newDocs);
    },
    countArray: (nouvelDocumentation: documentationProps[], categorie: string) => {
        let numberCatInArray:number = 0;
        for (let i = 0; i < nouvelDocumentation.length; i++) {
            if (nouvelDocumentation[i].id_categorie.text == categorie) {
                numberCatInArray = i;
            }
        }
        return numberCatInArray ;
    },
    removeArray: (nouvelDocumentation: documentationProps[], setNouvelDocumentation: (docs: documentationProps[]) => void, index: number) => {
        let updatedDocumentation:any[] = [];
        nouvelDocumentation.map((doc, i) => {
            if (i !== index) {
                updatedDocumentation.push(doc);
            }});
        setNouvelDocumentation(updatedDocumentation);
    },
    changeOrderArray: (nouvelDocumentation: documentationProps[], setNouvelDocumentation: (docs: documentationProps[]) => void, index: number) => {
        let updatedDocumentation:any[] = [...nouvelDocumentation];
        if (index > 0 && index < nouvelDocumentation.length) {
            const temp = updatedDocumentation[index - 1];
            updatedDocumentation[index - 1] = updatedDocumentation[index];
            updatedDocumentation[index] = temp;
            setNouvelDocumentation(updatedDocumentation);
        }
    },
};