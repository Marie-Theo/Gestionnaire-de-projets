import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import BadgesOutils from "./components/badgesOutils";
import { tools } from "@/components/tools";

interface projetProps {
    id: number;
    title: string;
    presentation: string;
    etat: {
        name: string,
        couleur: string
    };
    public: boolean;
}

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: string;
    }[];
}

export default function Projet({props}: {props:{projet: projetProps, outils: OutilsProps[], projetN: number, setProjetN: (projetN: number) => void, setPage: (page: string) => void}}) {

    const { projet, outils, projetN, setProjetN, setPage } = props;
    const id_projet = projet.id;

    return (
    <Card className="max-w-100 pt-4 mb-4 relative pb-17 gap- hover:shadow-lg transition-shadow duration-300 lg:scale-100 hover:lg:scale-[100.2%] hover:cursor-pointer" onClick={() => {setPage("projet");setProjetN(projet.id)}}>
            <CardHeader>
                <CardAction>
                    <Badge variant="outline" className={tools.defineBadgecolor(projet.etat.couleur)}>{projet.etat.name}</Badge> 
                    <Badge variant="outline" className={tools.definePublicBadgeColor(projet.public)}>{projet.public ? 'Public' : 'Privé'}</Badge>
                </CardAction>
                <CardTitle className="hover:underline underline-offset-2">{projet.title}</CardTitle>
            </CardHeader>
            <CardDescription className="pl-6 pr-5">&emsp;{''+projet.presentation}</CardDescription>
            <CardFooter className="absolute bottom-3 flex flex-wrap gap-1">
                <BadgesOutils props={{id_projet,outils}} />
            </CardFooter>
    </Card>);
}