"use client"

// import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";

export default function FormConnexion() {

    const pseudoRef = useRef<any>(null);
    const mdpRef = useRef<any>(null);

    async function valide(){
        var pseudo = pseudoRef.current.value;
        var mdp = mdpRef.current.value;

        if (pseudo !="" && mdp.length != 0){

            const responseUser = await fetch(`http://localhost:3000/api/user/connexion?pseudo=${pseudo}&mdp=${mdp}` , {
                method : 'GET',
                headers: {
                    'Cache-control' : 'no-cache, no-store, must-revalidate',
                    'Pragma' : 'no-cache',
                    'Expires' : '0'
                }
            });

            const User = await responseUser.json();
            console.log(User);
        }
        return true;
    }

    return (
        <form className="md:mt-md md:max-w-md center mx-auto mt-25 flex flex-col" action="">
            <h1 className="text-3xl center">Connexion :</h1>
            <Label className='mt-3' htmlFor="pseudo">Pseudo</Label>
            <Input type="text" placeholder="Pseudo" id="pseudo" ref={pseudoRef}/>
            <Label className='mt-3' htmlFor="password">Mot de passe</Label>
            <Input type="password" placeholder="••••••••" id="password" ref={mdpRef}/>

            <Button className='mx-auto w-[100%] mt-3' onClick={valide}>Connexion</Button>
        </form>
    );
}