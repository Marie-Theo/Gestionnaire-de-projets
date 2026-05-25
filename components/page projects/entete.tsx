import { Card } from '@/components/ui/card';
import { tools } from "@/components/tools";
import { Button } from '@/components/ui/button';
import fetchArticle from "@/hooks/fetch/fetchArticle";
import fetchDocumentation from "@/hooks/fetch/fetchDocumentation";

interface projetProps {
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

interface userProps {
    id: number;
    name: string;
    mdp: string;
    theme: string;
    presentation:string;
    created_at: string;
}
export default function Entete({props}: {props:{projets: any[], outil: any[], outils: any[], etat: any[], users: any[], setPage: (page: string) => void, setArticle: (article: projetProps) => void,user:userProps, setDocumentation: (documentation: any[]) => void}}) {
    
    const { projets, outil, outils, etat, users, setPage, setArticle, setDocumentation } = props;

	function clickPorjet(){
		setPage("projet");
		fetchArticle(2, setArticle);
		fetchDocumentation(2, setDocumentation);
	}

    return (
		<Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg mb-4">
			<div className='grow relative top-0 z-10'>
				<h1 className='font-bold text-2xl pb-2'>Bienvenue sur mon répertoire de projets.</h1>
                <p className='mb-1'>&emsp;&emsp;Ayant des problèmes de motivation et de créativité, je me suis dit que c'était une bonne idée de me crées un répertoire de projets où je pourrais gérer les différentes idées de projet que j'ai afin d'avoir des idées de projet quand je suis en manque de créativité.</p><p>En cours de réalisation, j'ai trouvé qu'il était intéressant de regrouper les projets personnels et professionnels que j'ai pu réaliser.</p>
                <Button variant="link" className="absolute bottom-[-6.02] right-0 text-blue-600 hover:text-blue-700 hover:underline underline-offset-0 hover:cursor-pointer" onClick={() => {clickPorjet()}}>En savoir plus ...</Button>
            </div>
		</Card>
    );
}