'use client'

import { Card } from "@/components/ui/card";
import { tools } from "./tools";

export default function Menu() {

    if (localStorage.getItem("id") === undefined) {
        localStorage.setItem("id", '0');
    }

    const id_user = localStorage.getItem("id") ? Number(localStorage.getItem("id")) : 0;

    return (
        <Card className="fixed bottom-4 left-[25%] w-[50%] max-h-[10%] bg-white border-t border-gray-200 pt-[0.5%] pb-[0.5%]">
            <div className="container mx-auto flex justify-around">
                { id_user !== 0 ?
                    <a href={`/project/new`} className="text-sm xs:text-xs lg:text-lg xl:text-xl">Nouveaux</a>
                    : null
                }
                <a href={`/project`} className="text-sm xs:text-xs lg:text-lg xl:text-xl">Projets</a>
                { id_user !== 0 ?
                    <a href={`/user/dashboard`} className="text-sm xs:text-xs lg:text-lg xl:text-xl">Compte</a>
                    : <a href={`/user/connexion`} className="text-sm xs:text-xs lg:text-lg xl:text-xl">Connexion</a>
                }
            </div>
        </Card>
    );
}