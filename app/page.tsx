"use client"

import getProjet from '../hooks/variable_env';
import ListingProjet from '../components/listingProjet';

export default function Home() {

	const { projets, etat, outil, outils, users, user } = getProjet();


	if (projets.length === 0 || etat.length === 0 || outil.length === 0 || outils.length === 0 || users.length === 0) {
		return <div>
			<h1>Bienvenue sur mon répertoire de projets</h1>
			<span>Aucun projet trouvé</span><br/>
		</div>
	}

	return <div>
		<h1>Bienvenue sur mon répertoire de projets</h1>
		<span>{projets.length} projets</span><br/>
		<span>{etat.length} etat</span><br/>
		<span>{outil.length} outil</span><br/>
		<span>{outils.length} outils</span><br/>
		<span>{users.length} users</span><br/>
		<span>{user.length} user connecté</span><br/>
		<ListingProjet props={{projets, outils}} />
	</div>
	;
}