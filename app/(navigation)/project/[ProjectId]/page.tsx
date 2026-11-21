"use client";

import { useEffect, useState } from "react";
import Entete from "@/components/page project/entete";
import Contante from "@/components/page project/contenu";

interface OutilsProps {
    id: number;
    id_projet: number;
    outil: { name: string }[];
}

interface documentationProps {
    id: number;
    id_categorie: {
        id: number;
        text: string;
        ordre: number;
        style: number;
    };
    text: string;
}

interface projectProps {
    id: number;
    created_at: string;
    seen_at: string;
    title: string;
    presentation: string;
    repositories: string;
    etat: { name: string; couleur: string };
    id_user: number;
    public: boolean;
}

export default function Pageproject({ params }: { params: Promise<{ value:{projectId: string} }>; }) {
    const projectId = params.value.ProjectId;

    const [id_user, setId_user] = useState<number | null>(null);
    const [project, setProject] = useState<projectProps[] | null>(null);
    const [documentation, setDocumentation] = useState<documentationProps[] | null>(null);
    const [outil, setOutil] = useState<OutilsProps[] | null>(null);
    const [loading, setLoading] = useState(true);

    // 1. Lecture du storage une seule fois, après le montage
    useEffect(() => {
        const stored = sessionStorage.getItem("id");
        setId_user(stored ? Number(stored) : 0);
    }, []);

    // 2. Fetch quand id_user est connu (une seule fois, car id_user ne change plus après)
    useEffect(() => {
        if (id_user === null) return; // on attend d'avoir lu le sessionStorage

        const controller = new AbortController();

        (async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/api/projects?id=${projectId}&id_user=${id_user}`,
                    {
                        method: "GET",
                        headers: {
                            "Cache-control": "no-cache, no-store, must-revalidate",
                            Pragma: "no-cache",
                            Expires: "0",
                        },
                        signal: controller.signal,
                    }
                );

                if (!response.ok) {
                    const text = await response.text(); // lit le body brut, ne plante jamais
                    console.error(`Erreur API (${response.status}):`, text);
                    setLoading(false);
                    return;
                }

                const data: {
                    project: projectProps[];
                    documentation: documentationProps[];
                    outil: OutilsProps[];
                } = await response.json();

                setProject(data.project);
                setDocumentation(data.documentation);
                setOutil(data.outil);
            } catch (e) {
                if ((e as Error).name !== "AbortError") console.error(e);
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [id_user, projectId]);

    if (loading || !project) return <div>Chargement...</div>;

    return (
        <div>
            <Entete project={project[0]} outils={outil ?? []} documentation={documentation ?? []} />
            <Contante documentation={documentation ?? []} />
        </div>
    );
}