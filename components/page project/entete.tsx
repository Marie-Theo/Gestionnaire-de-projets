import Titre from "@/components/page project/titre";
import Sommaire from "@/components/page project/sommaire";

import { documentationProps, projectProps, OutilsProps } from "@/hooks/interface";

export default function Entete({project, outils, documentation}: {outils:OutilsProps[], project:projectProps, documentation:documentationProps[]}){

    return (
        <div className="grid grid-cols-3 gap-5 xl:gap-1">
            <Titre project={project} outils={outils} />
            <Sommaire documentation={documentation} />
        </div>
    );
}