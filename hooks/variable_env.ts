"use client"

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function getProjet () {
    const [projets, setProjets] = useState<any[]>([]);
    const [etat, setEtat] = useState<any[]>([]);
    const [outil, setOutil] = useState<any[]>([]);
    const [outils, setOutils] = useState<any[]>([]);

    useEffect(() => {
        async function fetchProjets() {
        const { data, error } = await supabase
            .from('projets')
            .select('*')
            .eq("public", true);
            console.log("fetching projets...");

            if (error) console.error(error);
            else {
                console.log(data);
                setProjets(data);
                console.log(projets);
            };
        }

        fetchProjets();
    }, []);

    useEffect(() => {
        async function fetchEtat() {
        const { data, error } = await supabase
            .from('etat')
            .select('*');
            console.log("fetching etat...");

            if (error) console.error(error);
            else {
                console.log(data);
                setEtat(data);
                console.log(etat);
            };
        }

        fetchEtat();
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
                setOutil(data);
                console.log(outil);
            };
        }

        fetchOutil();
    }, []);

    useEffect(() => {
        async function fetchOutils() {
        const { data, error } = await supabase
            .from('outils')
            .select('*');
            console.log("fetching outils...");

            if (error) console.error(error);
            else {
                console.log(data);
                setOutils(data);
                console.log(outils);
            };
        }

        fetchOutils();
    }, []);

    return {
        projets,
        etat,
        outil,
        outils
    }
}