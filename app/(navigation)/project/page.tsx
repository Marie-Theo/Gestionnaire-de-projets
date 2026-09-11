"use client"

import listingProjects from '@/hooks/listingProjets';
import ListingProjet from '@/components/page projects/listingProject';

export default function Projects() {

    if (sessionStorage.getItem("id") === "null") {
        sessionStorage.setItem("id", '0');
    }

    const id_user = sessionStorage.getItem("id") ? Number(sessionStorage.getItem("id")) : 0;

    const { outils, projects, projectsLastSeen} = listingProjects(id_user);
    
    return (
        <section id="projects" >
            <ListingProjet projects={projectsLastSeen} outils={outils} title="Projets récemment vus"/>
            <ListingProjet projects={projects} outils={outils} title="Tous les projets"/>
        </section>
    );
}