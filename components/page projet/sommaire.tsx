import { Card } from "@/components/ui/card";

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

export default function Sommaire({props}:{props:{documentation:documentationProps[]}}){

    const { documentation } = props;

    const obj = {temps:''};

    function writeSommaire(categorie:any){
        if (obj.temps != categorie.id_categorie.text){
            obj.temps = categorie.id_categorie.text;
            return (
                <div key={categorie.id}>-&nbsp;
                    <a href={"#"+categorie.id_categorie.text} className="hover:underline underline-offset-1">
                        {categorie.id_categorie.text}
                    </a>
                </div>
            );
        }
    }

    return (
        documentation.length > 0?(
            <Card className="col-span-3 md:col-span-2 xl:col-span-1 p-5 pt-4 gap-0">
                <h1 className="text-xl">Sommaire :</h1>
                <div className="pl-3">
                    {documentation.map((categorie) => (
                        writeSommaire(categorie)
                    ))}
                </div>
            </Card>
        ) : null
    );
}