import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from 'react';

export default function UserInfo(id_user : number){

    const [outils, setOutils] = useState([]);
    const [projects, setprojects] = useState([]);
    const [user, setUser] = useState([]);

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
                console.log(outils);
            }
        }, [outils]);

        useEffect(() => {
            async function getproject() {
                const responseproject = await fetch(`http://localhost:3000/api/user/project?id_user=${id_user}` , {
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
                console.log(projects);
            }
        }, [projects]);

        useEffect(() => {
            async function getUser() {
                const responseUser = await fetch(`http://localhost:3000/api/user?id=${id_user}` , {
                    method : 'GET',
                    headers: {
                        'Cache-control' : 'no-cache, no-store, must-revalidate',
                        'Pragma' : 'no-cache',
                        'Expires' : '0'
                    }
                });

                setUser(await responseUser.json());
            }
            if (user.length == 0){
                console.log('fetch user');
                getUser();
                console.log(user);
            }
        }, [user]);

    return {outils, projects, user};
}