import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import BadgesOutils from "./badgesOutils";
import { tools } from "./tools";

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

export default function Projet({props}: {props:{projet: projetProps, outils: OutilsProps[]}}) {

    const { projet, outils } = props;
    const id_projet = projet.id;

    return (
    <Card className="max-w-100 pt-4 mb-4 relative pb-10">
        <CardHeader>
            <CardAction>
                <Badge variant="outline" className={tools.defineBadgecolor(projet.etat.couleur)}>{projet.etat.name}</Badge> 
                <Badge variant="outline" className={tools.definePublicBadgeColor(projet.public)}>{projet.public ? 'Public' : 'Privé'}</Badge>
            </CardAction>
            <CardTitle>{projet.title}</CardTitle>
        </CardHeader>
        <CardDescription className="pl-6 pr-5">{'    '+projet.presentation}</CardDescription>
        <CardFooter className="absolute bottom-3">
            <BadgesOutils props={{id_projet,outils}} />
        </CardFooter>
    </Card>);
}