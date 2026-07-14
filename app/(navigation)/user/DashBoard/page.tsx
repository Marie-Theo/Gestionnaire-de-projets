"use client"

import UserInfo from '@/hooks/userInfo';
import ListingProjet from '@/components/page projects/listingProject';

export default function DashBoard() {

    if (localStorage.getItem("id") === undefined) {
        localStorage.setItem("id", '0');
    }

    const id_user = localStorage.getItem("id") ? Number(localStorage.getItem("id")) : 0;

    const { outils, projects, user } = UserInfo(id_user);

    console.log(user);
    
    return (
        <div>
            <section id="user-info" >
            </section>
            <section id="projects" >
                <ListingProjet projects={projects} outils={outils} title="Projets"/>
            </section>
        </div>
    );
}