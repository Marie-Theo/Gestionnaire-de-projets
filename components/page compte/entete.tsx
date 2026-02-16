import { Card } from "../ui/card";
import PresentationUser from "@/components/page compte/PresentationUser";
import Lien from "@/components/page compte/lien";

interface userProps {
    id: number;
    mdp: string;
    name: string;
    theme: string;
    created_at: string;
}

interface lienUserProps {
    id:number,
    lien:{
        id:number,
        site:string
    },
    url:string
}

export default function Entete({props}:{props:{lien:lienUserProps[],user:userProps}}){

    const { lien, user } = props

    return(
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense gap-6 md:gap-4 p-5">
            <PresentationUser {...user}/>
            <Lien {...lien}/>
        </div>
    );
}