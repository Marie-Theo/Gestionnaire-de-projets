"use client"

// import Entete from '@/components/page projects/entete';
import listingProjects from '@/hooks/listingProjets';
import ListingProjet from '@/components/page projects/listingProject';

export default function Projects() {

    if (localStorage.getItem("id") === undefined) {
        localStorage.setItem("id", '0');
    }

    const id_user = localStorage.getItem("id") ? Number(localStorage.getItem("id")) : 0;

    console.log(id_user);

    const { outils, projects, projectsLastSeen} = listingProjects(id_user);
    
    return (
        <section id="projects" >
            {/* <Entete props={{projets, outil, outils, etat, users, setPage, setArticle, setDocumentation}} /> */}
            <ListingProjet projects={projectsLastSeen} outils={outils} title="Projets récemment vus"/>
            <ListingProjet projects={projects} outils={outils} title="Tous les projets"/>
        </section>
    );
}