import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from 'react';

export default function listingProjects(id_user : number){

    const [projects, setprojects] = useState([]);
    const [projectsLastSeen, setProjectsLastSeen] = useState([]);
    const [outils, setOutils] = useState([]);

        useEffect(() => {
            async function getoutils() {
                const responseOutils = await fetch(`http://localhost:3000/api/projects/outil` , {
                    method : 'GET',
                    headers: {
                        'Cache-control' : 'no-cache, no-store, must-revalidate',
                        'Pragma' : 'no-cache',
                        'Expires' : '0'
                    }
                });

                setOutils(await responseOutils.json());
            }
            if (outils.length == 0){
                console.log('fetch outils');
                getoutils();
            }
        }, [outils]);

        useEffect(() => {
            async function getproject() {
                const responseproject = await fetch(`http://localhost:3000/api/projects?id_user=${id_user}` , {
                    method : 'GET',
                    headers: {
                        'Cache-control' : 'no-cache, no-store, must-revalidate',
                        'Pragma' : 'no-cache',
                        'Expires' : '0'
                    }
                });

                setprojects(await responseproject.json());
            }
            if (projects.length == 0){
                console.log('fetch projects');
                getproject();
            }
        }, [projects]);
            
        useEffect(() => {
            async function getprojectsLastSeen() {
                const responseLastSeen = await fetch(`http://localhost:3000/api/projects/project/lastseen?id_user=${id_user}` , {
                    method : 'GET',
                    headers: {
                        'Cache-control' : 'no-cache, no-store, must-revalidate',
                        'Pragma' : 'no-cache',
                        'Expires' : '0'
                    }
                });

                setProjectsLastSeen(await responseLastSeen.json());
            }
            if (projectsLastSeen.length == 0){
                console.log('fetch projectsLastSeen');
                getprojectsLastSeen();
            }
            
        }, [projectsLastSeen]);


    useEffect(() => {
        console.log(outils);
    }, [outils]);
    useEffect(() => {
        console.log(projects);
    }, [projects]);
    useEffect(() => {
        console.log(projectsLastSeen);
    }, [projectsLastSeen]);
    return {outils, projects, projectsLastSeen};
}