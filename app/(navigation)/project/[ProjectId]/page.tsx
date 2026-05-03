// import Entete from "@/components/page project/entete";
// import Contante from "@/components/page project/contenu";

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

    const { projectId } = await params

    const response = await fetch(`http://localhost:3000/api/project?id=${projectId}` , {
        method : 'GET',
        headers: {
            'Cache-control' : 'no-cache, no-store, must-revalidate',
            'Pragma' : 'no-cache',
            'Expires' : '0'
        }
    })

    const data = await response.json();

    console.log(data);



    // const {outils, project, documentation} = data.map((item : {outils:any[], project:projectProps, documentation:documentationProps[]}) => ({
    //     outils : item.outils,
    //     project : item.project,
    //     documentation : item.documentation
    // }));

    // return (
    //     <div>
    //         <Entete project={project} outils={outils} documentation={documentation}/>
    //         <Contante documentation={documentation} />
    //     </div>
    // );
}