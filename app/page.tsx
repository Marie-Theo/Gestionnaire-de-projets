"use client"

import getProjet from '@/hooks/variable_env';
import Menu from '@/components/Menu';
import Index from '@/components/page projets/index';
import Article from '@/components/page projet/article';
import FormConnexion from '@/components/page connexion/Connexion';

export default function Home() {

	const { projets, setProjets, lastProjets, setLastProjets, etat, outil, outils, users, user, setUser, page, setPage, projetN, setProjetN } = getProjet();

	// if (projets.length === 0 || etat.length === 0 || outil.length === 0 || outils.length === 0 || users.length === 0) {
	// 	return <div>
	// 		<h1>Bienvenue sur mon répertoire de projets</h1>
	// 		<span>Aucun projet trouvé</span><br/>
	// 	</div>
	// }

	return (
	<section className="pl-[10%] pr-[10%] pt-10 pb-[5%]">
		{page === "projets" ? (
			<Index props={{projets, outil, outils, etat, users, lastProjets, setPage, projetN, setProjetN}} />
		) : page === "projet" ? (
			<Article props={{projets, outil, outils, etat, users, user, lastProjets, setPage, projetN, setProjetN, setProjets, setLastProjets }} />
		// ) : page === "a-propos" ? (

		) : page === "compte" ? (
			<div>{user.name}</div>
		) : page === "Connexion" ? (
			<FormConnexion props={{user, setUser, setPage, setProjets, setLastProjets}} />
		// ) : page === "Nouveaux" ? (

		) : null}
		<Menu props={{user, page, setPage}} />
	</section>
	);
}