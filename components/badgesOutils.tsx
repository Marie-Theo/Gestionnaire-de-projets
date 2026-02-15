import { Badge } from "@/components/ui/badge";

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: string;
    }[];
}

export default function BadgesOutils({props}: {props:{id_projet: number,outils : OutilsProps[]}}) {

    const { id_projet, outils } = props;

    return (
    outils.map((entry: any) => {
        if (entry.id_projet === id_projet) {
            return <Badge variant="secondary" className="mr-1" key={entry.id}>{entry.outil.name}</Badge>
        }
    }));
    
}