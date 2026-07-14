"use client"

import listingProjects from '@/hooks/listingProjets';
import ListingProjet from '@/components/page projects/listingProject';

export default function Projects() {

    if (localStorage.getItem("id") === undefined) {
        localStorage.setItem("id", '0');
    }

    const id_user = localStorage.getItem("id") ? Number(localStorage.getItem("id")) : 0;

    const { outils, projects, projectsLastSeen} = listingProjects(id_user);
    
    return (
        <section id="projects" >
            <ListingProjet projects={projectsLastSeen} outils={outils} title="Projets récemment vus"/>
            <ListingProjet projects={projects} outils={outils} title="Tous les projets"/>
        </section>
    );
}