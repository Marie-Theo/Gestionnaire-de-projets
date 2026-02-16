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
        <div className="p-4 rounded-lg pl-10 pr-10 max-h-[min-content] p-2 shadow col-span-1 flex ">
            { lien.length > 0? (
                lien.map((src) => (
                <a href={src.url}>{src.lien.site}</a>
            ))): "aucun lien enregistrer"}
        </div>
    );
}