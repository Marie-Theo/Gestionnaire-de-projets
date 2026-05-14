import Entete from '@/components/page projets/entete';
import ListingProjet from '@/components/page projets/listingProject';

export default async function Pageproject() {

    const response = await fetch(`http://localhost:3000/api/projects` , {
        method : 'GET',
        headers: {
            'Cache-control' : 'no-cache, no-store, must-revalidate',
            'Pragma' : 'no-cache',
            'Expires' : '0'
        }
    });

    const projects = await response.json();

    return (
        <section id="accueil" >
            {/* <Entete props={{projets, outil, outils, etat, users, setPage, setArticle, setDocumentation}} />
            <ListingProjet props={{projets:lastProjets, outils, title:"Projets récemment vus", setPage, user, setLastProjets, setArticle, setDocumentation}} /> */}
            <ListingProjet projects={projects} outils={outils} title={"Tous les projets"} user={user} />
        </section>
    );
}