import { Badge } from "@/components/ui/badge";

import { OutilsProps } from "@/hooks/interface";

export default function BadgesOutils({id,outils} : {id: number,outils : OutilsProps[]}) {

    if (!outils){
        return;
    }

    return (
        outils.map(element => {
            if (element.id_projet === id) {
                return <Badge variant="secondary" key={element.id}>{element.outil.name}</Badge>
            }
        })
    );
}