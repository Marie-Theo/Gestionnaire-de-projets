"use client"

import getProjet from '../hooks/variable_env';
import ListingProjet from '../components/listingProjet';
import Entete from '../components/entete';

export default function Home() {

	const { projets, lastProjets, etat, outil, outils, users, user } = getProjet();

	if (projets.length === 0 || etat.length === 0 || outil.length === 0 || outils.length === 0 || users.length === 0) {
		return <div>
			<h1>Bienvenue sur mon répertoire de projets</h1>
			<span>Aucun projet trouvé</span><br/>
		</div>
	}

	return (
	<section id="accueil" className="pl-[10%] pr-[10%] pt-10">
		<Entete props={{projets, outil, outils, etat, users}} />
		<ListingProjet props={{projets:lastProjets, outils, title:"Projets récemment vus"}} />
		<ListingProjet props={{projets, outils, title:"Tous les projets"}} />
	</section>
	);
}