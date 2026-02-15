"use client"

import getProjet from '../hooks/variable_env';
import Menu from '../components/Menu';
import Index from '../components/index';

export default function Home() {

	const { projets, lastProjets, etat, outil, outils, users, user, page, setPage } = getProjet();

	if (projets.length === 0 || etat.length === 0 || outil.length === 0 || outils.length === 0 || users.length === 0) {
		return <div>
			<h1>Bienvenue sur mon répertoire de projets</h1>
			<span>Aucun projet trouvé</span><br/>
		</div>
	}

	return (
	<section id="accueil" className="pl-[10%] pr-[10%] pt-10">
		{page === "projets" ? (
			<Index props={{projets, outil, outils, etat, users, lastProjets, setPage}} />
		// ) : page === "a-propos" ? (

		// ) : page === "compte" ? (

		// ) : page === "Connexion" ? (

		// ) : page === "Nouveaux" ? (

		) : null}
		<Menu props={{user, page, setPage}} />
	</section>
	);
}