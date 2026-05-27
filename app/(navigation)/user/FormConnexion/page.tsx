"use client"

import { AlertCircleIcon, InfoIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";

export default function FormConnexion() {

    const pseudoRef = useRef<any>(null);
    const mdpRef = useRef<any>(null);

    if (!erreur || !incorect){
        var [erreur, setErreur]  = useState(false);
        var [incorect, setIncorect]  = useState(false);
    }

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

            setErreur(false);
            setIncorect(false);
            if (User[0]){ // connexion reussi
                console.log('id :'+User[1]);

            } else if (User[2]){ // une erreur a étais trouvé
                setErreur(true);
                console.log(erreur);
                console.log(incorect);
            } else { // les  informations sont incorect
                setIncorect(true);
                console.log(erreur);
                console.log(incorect);
            }
        }
    }

    return (
        <div className="md:mt-md md:max-w-md center mx-auto mt-25 flex flex-col">
            <h1 className="text-3xl center">Connexion :</h1>
            <Label className='mt-3' htmlFor="pseudo">Pseudo</Label>
            <Input type="text" id="pseudo" ref={pseudoRef}/>
            <Label className='mt-3' htmlFor="password">Mot de passe</Label>
            <Input type="password" placeholder="••••••••" id="password" ref={mdpRef}/>
            <Button type="submit" className='mx-auto w-[100%] mt-3' onClick={valide}>Connexion</Button>

            {/* alert d'information renseigner incorect*/}
            <Alert variant="destructive" className={incorect === true ? "my-2 text-xs":"hidden" } >
                <AlertCircleIcon />
                <AlertTitle>Authentification incorect</AlertTitle>
                <AlertDescription className="font-light">
                    Le nom d'utilisateur ou le mot de passe renseigner est incorect! 
                </AlertDescription>
            </Alert>

            {/* alert d'erreur du coté du serveur*/}
            <Alert className={erreur === true ? "my-2 text-xs":"hidden" } >
                <InfoIcon />
                <AlertTitle>Oups ...</AlertTitle>
                <AlertDescription>
                    Une erreur c'est produit merci de prévenir une personne concerné :/
                </AlertDescription>
            </Alert>
        </div>
    );
}