import Titre from "@/components/page ajout/Titre";

export default function Entete({props}:{props:{nouveauArticle:any, setNouveauArticle: (nouveauArticle: any) => void, outil:any, etat:any, nouveauOutils:any[], setNouveauOutils: (nouveauOutils: any[]) => void}}){

    const {nouveauArticle,setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils} = props;

    return (
        <div className="grid grid-cols-3 gap-5 xl:gap-1">
            <Titre props={{nouveauArticle, setNouveauArticle, outil, etat, nouveauOutils, setNouveauOutils}}/>
        </div>
    );
}