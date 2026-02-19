"use client"

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface projetProps {
    id: number;
    created_at: string;
    seen_at: string;
    title: string;
    presentation: string;
    repositories: string;
    etat: {
        name: string,
        couleur: string
    }[];
    id_user: number;
    public: boolean;
}

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: {
        name: any;
    }[];
}

interface userProps {
    id: number;
    name: string;
    mdp: string;
    theme: string;
    presentation:string;
    created_at: string;
}

interface lienProps {
    id:number;
    site: {
        id:number;
        site:string;
    } | null;
    url:string;
}


export default function getProjet () {
    const [projets, setProjets] = useState<projetProps[]>([]);
    const [lastProjets, setLastProjets] = useState<projetProps[]>([]);
    const [projetUser, setProjetUser] = useState<projetProps[]>([]);
    const [etat, setEtat] = useState<any[]>([]);
    const [outil, setOutil] = useState<any[]>([]);
    const [outils, setOutils] = useState<OutilsProps[]>([]);
    const [users, setUsers] = useState<any[]>([]);
    const [user, setUser] = useState<userProps>({ id: 0, name: '', mdp: '', theme: '', presentation: '', created_at: '' });
    const id_user:number = user.id;
    const [page, setPage] = useState<string>("projets");
    const [lien, setLien] = useState<lienProps[]>([]);
    const [article, setArticle] = useState<projetProps[]>([]);

    useEffect(() => {
        async function fetchProjets() {
        // Récupérer les projets publics si l'utilisateur n'est pas connecté, sinon récupérer les projets de l'utilisateur connecté
        if (user.id == 0) {
            const { data, error } = await supabase
                .from('projets')
                .select('id, created_at, seen_at, title, presentation, repositories, etat:etat ( name, couleur ), id_user, public')
                .eq("public", true)
                .order('id_etat', { ascending: false });
                console.log("fetching projets...");

                if (error) console.error(error);
                else {
                    console.log(data);
                    setProjets(data || []);
                };
        } else {
            const { data, error } = await supabase
                .from('projets')
                .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
                .or("public.eq."+ true+",id_user.eq."+ id_user)
                .order('id_etat', { ascending: false });
                console.log("fetching projets...");

                if (error) console.error(error);
                else {
                    console.log(data);
                    setProjets(data || []);
                };
            }
        }

        if (projets.length === 0) {
            fetchProjets();
        }
    }, [user]);
    
    useEffect(() => {
        async function fetchLastProjets() {
        // Récupérer les projets publics si l'utilisateur n'est pas connecté vu récemment, sinon récupérer les projets de l'utilisateur connecté qui ont été vus récemment
        if (user.id === 0) {
            const { data, error } = await supabase
                .from('projets')
                .select('id, created_at, seen_at, title, presentation, repositories, etat:etat ( name, couleur ), id_user, public')
                .eq("public", true)
                .order('seen_at', { ascending: false })
                .limit(4);
                console.log("fetching last seen projets...");

                if (error) console.error(error);
                else {
                    console.log(data);
                    setLastProjets(data || []);
                };
        } else {
            const { data, error } = await supabase
                .from('projets')
                .select('id, created_at, seen_at, title, presentation, repositories, etat ( name, couleur ), id_user, public')
                .or("public.eq."+ true+",id_user.eq."+ id_user)
                .order('seen_at', { ascending: false })
                .limit(4);
                console.log("fetching last seen projets...");

                if (error) console.error(error);
                else {
                    console.log(data);
                    setLastProjets(data || []);
                };
            }
        }

        if (lastProjets.length === 0) {
            fetchLastProjets();
        }
    }, [user]);

    useEffect(() => {
        async function fetchEtat() {
        const { data, error } = await supabase
            .from('etat')
            .select('*');
            console.log("fetching etat...");

            if (error) console.error(error);
            else {
                console.log(data);
                setEtat(data || []);
            };
        }

    if (etat.length === 0) {
        fetchEtat();
    }
    }, []);

    useEffect(() => {
        async function fetchOutil() {
        const { data, error } = await supabase
            .from('outil')
            .select('*');
            console.log("fetching outil...");

            if (error) console.error(error);
            else {
                console.log(data);
                setOutil(data || []);
            };
        }

    if (outil.length === 0) {
        fetchOutil();
    }
    }, []);

    useEffect(() => {
        async function fetchOutils() {
        const { data, error } = await supabase
            .from('outils')
            .select('id, id_projet, outil:outil ( name )');
            console.log("fetching outils...");

            if (error) console.error(error);
            else {
                console.log(data);
                setOutils(data || []);
            };
        }

    if (outils.length === 0) {
        fetchOutils();
    }
    }, []);
    
    useEffect(() => {
        async function fetchUsers() {
        const { data, error } = await supabase
            .from('users')
            .select(' id, name, theme, created_at ');
            console.log("fetching users...");

            if (error) console.error(error);
            else {
                console.log(data);
                setUsers(data || []);
            };
        }

    if (users.length === 0) {
        fetchUsers();
    }
    }, []);

    return {
        projets, setProjets,
        lastProjets, setLastProjets,
        projetUser, setProjetUser,
        etat,
        outil,
        outils,
        users,
        user, setUser,
        page, setPage,
        lien, setLien,
        article, setArticle
    }
}