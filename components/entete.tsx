import { Card } from '@/components/ui/card';
import { tools } from "./tools";
import { Button } from './ui/button';

export default function Entete({props}: {props:{projets: any[], outil: any[], outils: any[], etat: any[], users: any[], setPage: (page: string) => void}}) {
    
    const { projets, outil, outils, etat, users, setPage } = props;

    return (
		<Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg mb-4 flex flex-row shadow-sl gap-10">
			<div className='grow sticky top-0 z-10'>
				<h1 className='font-bold text-2xl pb-2'>Bienvenue sur mon répertoire de projets.</h1>
                <p className='mb-1'>&emsp;&emsp;Ayant des problèmes de motivation et de créativité, je me suis dit que c'était une bonne idée de me crées un répertoire de projets où je pourrais gérer les différentes idées de projet que j'ai afin d'avoir des idées de projet quand je suis en manque de motivation.</p><p>En cours de réalisation, j'ai trouvé qu'il était intéressant de regrouper les projets personnels et professionnels que j'ai pu réaliser.</p>
                <Button variant="link" className="absolute bottom-[-7] right-0 text-blue-700 hover:cursor-pointer" onClick={() => setPage("a-propos")}>En savoir plus ...</Button>
            </div>
			<div className="bg-gray-100 text-gray-900 p-4 rounded-lg pl-10 pr-10 min-w-auto shadow-xl flex-none max-h-[min-content]">
				<pre>Données :<br/>
					{projets.length} projet{tools.pluralize(projets.length)}<br/>
					{etat.length} type{tools.pluralize(etat.length)} d'etat{tools.pluralize(etat.length)} de projet<br/>
					{outil.length} outil{tools.pluralize(outil.length)} / langage{tools.pluralize(outil.length)} de programmation{tools.pluralize(outil.length)}<br/>
					{outils.length} jointure{tools.pluralize(outils.length)} d'outil{tools.pluralize(outils.length)} vers projet{tools.pluralize(outils.length)}<br/>
					{users.length} compte{tools.pluralize(users.length)}</pre>
			</div>
		</Card>
    );
}