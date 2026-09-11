"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner"

export default function Disconnexion() {

    sessionStorage.setItem("id", '0');
    window.location.href = "/";

    return (
        <div className="flex justify-center content-center">
            <Card className="w-full max-w-sm gap-1 mt-[15%]">
                <CardHeader className="text-center">
                    <CardTitle>Déconnexion</CardTitle>
                    <CardDescription>
                    Compte en cours de déconnexion
                    </CardDescription>
                </CardHeader>
                <CardContent className=" mt-5 content-center">
                    <center>
                        <Spinner className="size-6"/>
                    </center>
                </CardContent>
            </Card>
        </div>
    );
}