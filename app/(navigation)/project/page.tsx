"use server"

import Entete from '@/components/page projects/entete';
import ListingProjet from '@/components/page projects/listingProject';

export default async function Pageproject() {

    const responseOutils = await fetch(`http://localhost:3000/api/projects/outil` , {
        method : 'GET',
        headers: {
            'Cache-control' : 'no-cache, no-store, must-revalidate',
            'Pragma' : 'no-cache',
            'Expires' : '0'
        }
    });

    const outils = await responseOutils.json();

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
        <section id="projects" >
            {/* <Entete props={{projets, outil, outils, etat, users, setPage, setArticle, setDocumentation}} />
            <ListingProjet props={{projets:lastProjets, outils, title:"Projets récemment vus", setPage, user, setLastProjets, setArticle, setDocumentation}} /> */}
            <ListingProjet projects={projects} outils={outils} title={"Tous les projets"}/>
        </section>
    );
}