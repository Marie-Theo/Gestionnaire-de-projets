import Entete from "@/components/page project/entete";
import Contante from "@/components/page project/contenu";

interface documentationProps {
    id:number;
    id_categorie:{
        id:number;
        text:string;
        ordre:number;
        style:number;
    };
    text:string;
}

interface projectProps {
    id: number;
    created_at: string;
    seen_at: string;
    title: string;
    presentation: string;
    repositories: string;
    etat: {
        name: string,
        couleur: string
    };
    id_user: number;
    public: boolean;
}
// il faudra faire d'autre fetch car tous n'est pas dans le http://localhost:3000/api/project
export default async function Pageproject({ params } : {params : { projectId : string }}) {

    const { projectId } = await params;

    // const responseProject = await fetch(`http://localhost:3000/api/projects/project?id=${projectId}` , {
    //     method : 'GET',
    //     headers: {
    //         'Cache-control' : 'no-cache, no-store, must-revalidate',
    //         'Pragma' : 'no-cache',
    //         'Expires' : '0'
    //     }
    // });

    // const project:projectProps = await responseProject.json();

    // const responseDocumentation = await fetch(`http://localhost:3000/api/projects/documentation?id=${projectId}` , {
    //     method : 'GET',
    //     headers: {
    //         'Cache-control' : 'no-cache, no-store, must-revalidate',
    //         'Pragma' : 'no-cache',
    //         'Expires' : '0'
    //     }
    // });

    // const documentation:documentationProps[] = await responseDocumentation.json();

    // const responseOutil = await fetch(`http://localhost:3000/api/projects/outil?id=${projectId}` , {
    //     method : 'GET',
    //     headers: {
    //         'Cache-control' : 'no-cache, no-store, must-revalidate',
    //         'Pragma' : 'no-cache',
    //         'Expires' : '0'
    //     }
    // });

    // const outil = await responseOutil.json();

    const response = await fetch(`http://localhost:3000/api/projects/id=${projectId}` , {
        method : 'GET',
        headers: {
            'Cache-control' : 'no-cache, no-store, must-revalidate',
            'Pragma' : 'no-cache',
            'Expires' : '0'
        }
    });

    const data = await response.json();

    const {outil, project, documentation} = data.map((item : {outil:any[], project:projectProps, documentation:documentationProps[]}) => ({
        outil : item.outil,
        project : item.project,
        documentation : item.documentation
    }));

    return (
	    <section className="pl-[10%] pr-[10%] pt-10 pb-[15%] xs:pb-[12%] lg:pb-[9%] xl:pb-[6%]">
            <Entete project={project} outils={outil} documentation={documentation}/>
            <Contante documentation={documentation} />
        </section>
    );
}