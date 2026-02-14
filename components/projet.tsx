import { Card, CardHeader, CardAction, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import BadgesOutils from "./badgesOutils";

interface projetProps {
    id: number;
    title: string;
    presentation: string;
    etat: any;
    public: boolean;
}

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: string;
    }
}

export default function Projet({props}: {props:{projet: projetProps, outils: OutilsProps[]}}) {

    const { projet, outils } = props;
    const id_projet = projet.id;

    console.log("projets:", projet);
    console.log("outils:", outils);

    return <Card className="max-w-100 pt-4">
        <CardHeader>
            <CardAction>
                <Badge variant="outline">{projet.etat.name}</Badge>
                <Badge variant="outline" className="ml-2">{projet.public ? 'Public' : 'Privé'}</Badge>
            </CardAction>
            <CardTitle>{projet.title}</CardTitle>
            <CardDescription>{projet.presentation}</CardDescription>
        </CardHeader>
        <CardFooter>
            <BadgesOutils props={{id_projet,outils}} />
        </CardFooter>
    </Card>;
}