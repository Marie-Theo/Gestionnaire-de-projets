"use client"

import { AlertCircleIcon, InfoIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";

export default function FormConnexion() {

    const pseudoRef = useRef<any>(null);
    const mdpRef = useRef<any>(null);

	if (localStorage.getItem("id") == null) {
	    localStorage.setItem("id", '0');
	} else if (localStorage.getItem("id") >= 1){ // si l'user est déjà authentifié le rediriger vers /
        window.location.href = "/";
    }

    if (!erreur || !incorect){
        var [erreur, setErreur]  = useState(false);
        var [incorect, setIncorect]  = useState(false);
    }

    async function valide(){
        var pseudo = pseudoRef.current.value;
        var mdp = mdpRef.current.value;

        setErreur(false);
        setIncorect(false);

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
            if (User[0]){           // connexion reussi
                const id = User[1];

                localStorage.setItem("id", id);
                console.log(localStorage.getItem("id"));
                window.location.href = "/";
            } else if (User[2]){    // une erreur a étais trouvé
                setErreur(true);
            } else {                // les  informations sont incorect
                setIncorect(true);
            }
        }
    }

    return (
        <div className="md:mt-md md:max-w-md mx-auto mt-25 flex flex-col items-center gap-2">
            <Card className="w-full max-w-sm pb-0">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                    Enter your Pseudo below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="pseudo">Pseudo</Label>
                            <Input type="text" id="pseudo" ref={pseudoRef}/>
                        </div>
                        <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input id="password" type="password" placeholder="••••••••" ref={mdpRef} required />
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter className="bg-muted/100 p-4 rounded-b-xl border-t-1">
                    <Button type="submit" className='mx-auto w-full' onClick={valide}>
                        Login
                    </Button>
                </CardFooter>
            </Card>

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