import {Card} from "@/components/ui/card"

interface lienUserProps {
    id:number,
    lien:{
        id:number,
        site:string
    },
    url:string
}

export default function lien(lien:lienUserProps[]) {

    return (
        <Card className="p-4 rounded-lg pl-10 pr-10 min-w-auto max-h-[min-content]">
            { lien.length > 0? (
                lien.map((src) => (
                <a href={src.url}>{src.lien.site}</a>
            ))): "aucun lien enregistrer"}
        </Card>
    );
}