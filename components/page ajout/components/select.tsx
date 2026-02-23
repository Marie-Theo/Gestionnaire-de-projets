"use react"

import { useState } from "react";

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
};

export default function Select({ props }: { props: { nouveauArticle: projetProps } }) {

    const { nouveauArticle } = props;

    const [isPublic, setIsPublic] = useState<boolean>(nouveauArticle.public);

    function selectChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value === "true";
        e.target.value === "true" ? nouveauArticle.public = true : nouveauArticle.public = false;
        setIsPublic(value);
    }

    return (
        <select
        value={isPublic}
        onChange={(e)=>{selectChangeHandler(e);}}
        className={
            isPublic
            ? "inline-flex items-center justify-center rounded-full border px-0.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground bg-green-100 border-green-400 text-green-900 ml-1"
            : "inline-flex items-center justify-center rounded-full border px-0.5 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground bg-red-100 border-red-400 text-red-900 ml-1"
        }
        >
            <option value="true" className="bg-green-100 border-green-400 text-green-900">Public</option>
            <option value="false" className="bg-red-100 border-red-400 text-red-900">Privé</option>
        </select>
    )
}