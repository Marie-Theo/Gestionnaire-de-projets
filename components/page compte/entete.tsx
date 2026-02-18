import PresentationUser from "@/components/page compte/PresentationUser";
import Lien from "@/components/page compte/lien";

interface userProps {
    id: number;
    mdp: string;
    name: string;
    theme: string;
    created_at: string;
}

interface lienProps {
    id:number;
    site: {
        id:number;
        site:string;
    } | null;
    url:string;
}

export default function Entete({props}:{props:{lien:lienProps[],user:userProps}}){

    const { lien, user } = props

    return(
        <div className="grid grid-cols-3 md:grid-cols-5 md:gap-4 p-5">
            <PresentationUser {...user}/>
            <div className="p-4 rounded-lg pl-5 pr-5 shadow col-span-3 md:col-span-2 flex">
                <Lien props={{lien}}/>
            </div>
        </div>
    );
}