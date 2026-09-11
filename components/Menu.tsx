'use client'

import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import getNewToken from '@/hooks/token/getNewToken';
import React, { useState, useEffect } from "react";

export default function Menu() {

    const [token, setToken] = useState(() => {
        return sessionStorage.getItem("token") || "null";
    });
    
    const [id_user, setIdUser] = useState(() => {
        return sessionStorage.getItem("id") || "null";
    });

    useEffect(() => {
        if (token === "null") {
            getNewToken();
        }
    }, [token]);
    
    useEffect(() => {
        if (id_user === "null") {
            sessionStorage.setItem("id", '0');
        }
    }, [id_user]);

    return (
        <Card className="fixed bottom-4 left-[25%] w-[50%] max-h-[6%] pt-[0.5%] pb-[0.5%] flex-row h-full items-center gap-4 px-3 z-99">
            <div className="container mx-auto flex justify-around">
                { id_user !== "0" ?
                    <Button variant="ghost">
                        <a href={`/project/new`} className="text-sm xs:text-xs lg:text-lg xl:text-xl">Nouveaux</a>
                    </Button>
                    : null
                }
                <Button variant="ghost">
                    <a href={`/project`} className="text-sm xs:text-xs lg:text-lg xl:text-xl">Projets</a>
                </Button>
                { id_user !== "0" ?
                    <Button variant="ghost">
                        <a href={`/user/dashboard`} className="text-sm xs:text-xs lg:text-lg xl:text-xl">Compte</a>
                    </Button>
                    :
                    <Button variant="ghost">
                        <a href={`/user/connexion`} className="text-sm xs:text-xs lg:text-lg xl:text-xl">Connexion</a>
                    </Button>
                }
            </div>
            <Separator orientation="vertical" className="min-h-max"/>
            <ModeToggle/>
        </Card>
    );
}