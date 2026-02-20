import { Card } from "@/components/ui/card";

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

export default function contante({props}:{props:{documentation:documentationProps[]}}){

    const {documentation} = props;
    const obj = {temps:''};

    function writeTitle(text:string){
        obj.temps = text;
        return (
            <h2 id={text} className="text-2xl mt-10">
                {text} :
            </h2>
        );
    }

    return (
        <div>
            {documentation.map((section) => (
                <div key={section.id}>
                    { section.id_categorie.text != obj.temps ?(
                        writeTitle(section.id_categorie.text)
                    ):null}
                    <div>
                    { section.id_categorie.style == 1 ?(
                        <div className="m-5">&emsp;{section.text}</div>
                    ) : (
                        <Card className="m-3 ml-5 p-3">{section.text}</Card>
                    )}
                    </div>
                </div>
            ))}
        </div>
    );
}