import { Card } from "@/components/ui/card";
import { useMemo } from "react";

// Sommaire Réecrit et corigé par chatGPT

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

export default function Sommaire({props}:{props:{documentation:documentationProps[]}}){

    const { documentation } = props;

    const categoriesUniques = useMemo(() => {
        const seen = new Set<string>();

        return documentation.filter((categorie) => {
        const text = categorie.id_categorie.text;

        if (seen.has(text)) return false;

        seen.add(text);
        return true;
        });
    }, [documentation]);

    if (documentation.length === 0) return null;

    return (
        <Card className="col-span-3 md:col-span-2 xl:col-span-1 p-5 pt-4 gap-0 h-min">
        <h1 className="text-xl">Sommaire :</h1>

        <div className="pl-3">
            {categoriesUniques.map((categorie) => {
            const text = categorie.id_categorie.text;

            return (
                <div key={categorie.id}>
                -&nbsp;
                <a
                    href={`#${text}`}
                    className="hover:underline underline-offset-1"
                >
                    {text}
                </a>
                </div>
            );
            })}
        </div>
        </Card>
    );
}