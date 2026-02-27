"use client"

import getProjet from '@/hooks/variable_env';
import Menu from '@/components/Menu';
import Index from '@/components/page projets/index';
import Article from '@/components/page projet/article';
import FormConnexion from '@/components/page connexion/Connexion';
import Compte from '@/components/page compte/Compte';
import Nouveau from '@/components/page ajout/Nouveau';

export default function Home() {

	const { projets, setProjets, lastProjets, setLastProjets, etat, outil, outils, users, user, setUser, page, setPage, projetUser, setProjetUser, lien, setLien, article, setArticle, documentation, setDocumentation, categorie, setCategorie, nouveauArticle, setNouveauArticle, nouvelDocumentation, setNouvelDocumentation, nouveauOutils, setNouveauOutils } = getProjet();

	// if (projets.length === 0 || etat.length === 0 || outil.length === 0 || outils.length === 0 || users.length === 0) {
	// 	return <div>
	// 		<h1>Bienvenue sur mon répertoire de projets</h1>
	// 		<span>Aucun projet trouvé</span><br/>
	// 	</div>
	// }

	return (
	<section className="pl-[10%] pr-[10%] pt-10 pb-[5%]">
		{page === "projets" ? (
			<Index props={{projets, outil, outils, etat, users, lastProjets, setPage, user, setLastProjets, setArticle, setDocumentation}} />
		) : page === "projet" ? (
			<Article props={{projets, outil, outils, etat, users, user, lastProjets, setPage, article, setArticle, documentation }} />
		// ) : page === "a-propos" ? (

		) : page === "compte" ? (
			<Compte props={{ projetUser, setProjetUser, outils, user, setPage, lien, setLastProjets, setArticle, setDocumentation}} />
		) : page === "Connexion" ? (
			<FormConnexion props={{user, setUser, setPage, setProjets, setLastProjets, setProjetUser, setLien, setArticle, setCategorie }} />
		) : page === "Nouveaux" ? (
			<Nouveau props={{categorie,setCategorie,nouveauArticle, setNouveauArticle,nouvelDocumentation, setNouvelDocumentation,outil,etat,nouveauOutils, setNouveauOutils, categorie, setCategorie}}/>
		) : null}
		<Menu props={{user, page, setPage}} />
	</section>
	);
}