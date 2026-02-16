import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import sha256 from "@/components/sha256";
import { supabase } from "@/lib/supabaseClient";
import fetchProjet from "@/components/fetch";

interface userProps {
    id: number;
    name: string;
    mdp: string;
    theme: string;
    created_at: string;
}

export default function FormConnexion({props}: {props:{ user:userProps, setUser: (user: userProps) => void, setPage: (page: string) => void, setProjets: (projets: any[]) => void, setLastProjets: (lastProjets: any[]) => void}}) {

    const { user, setUser, setPage, setProjets, setLastProjets } = props;
    const [Erreur_Formulaire_inscription, setErreur_Formulaire_inscription] = useState<any>('false');
    const login_name = useRef<any>(null);
    const login_MDP = useRef<any>(null);

    async function fetchUser(Name: string) {
        const { data, error } = await supabase
        .from('users')
        .select(` id, name, mdp, theme, created_at `)
        .eq('pseudo', Name)
        .limit(1);
        if (error) console.error(error);
        else return (data[0] !== undefined ? data[0] : { id: 0, name: '', theme: '', created_at: '', mdp: '' });
    }
    
    async function getLogin(e: React.FormEvent<HTMLFormElement>) {
        let Name = login_name.current.value;
        let MDP = await sha256(login_MDP.current.value);
        setErreur_Formulaire_inscription('false');

        e.preventDefault();

        fetchUser(Name).then((data: any) => {
            if (data.id == 0){
                setErreur_Formulaire_inscription('Utilisateur non trouvé');
                return;
            } else if (data.mdp !== MDP){
                setErreur_Formulaire_inscription('Mot de passe incorrect');
                return;
            } else {
                setErreur_Formulaire_inscription('false');
                setUser(data);
                fetchProjet(data.id, setProjets, setLastProjets);
                setPage('comptes');
            }
            return false;
        });
    }

    return (
        <div className="md:mt-md md:max-w-md center mx-auto mt-25 flex flex-col">
            <h1 className="text-3xl center">Connexion :</h1>
            <Label className='mt-3' htmlFor="nom">Nom</Label>
            <Input type="text" placeholder="Nom" id="nom" ref={login_name}/>
            { Erreur_Formulaire_inscription === 'Utilisateur non trouvé' ? (<Alert className="mt-1 bg-red-50 border-red-300 text-red-800"><AlertDescription>{Erreur_Formulaire_inscription}</AlertDescription></Alert>) : null}
            <Label className='mt-3' htmlFor="password">Mot de passe</Label>
            <Input type="password" placeholder="password" id="password" ref={login_MDP}/>
            { Erreur_Formulaire_inscription === 'Mot de passe incorrect' ? (<Alert className="mt-1 bg-red-50 border-red-300 text-red-800"><AlertDescription>{Erreur_Formulaire_inscription}</AlertDescription></Alert>) : null}
            { Erreur_Formulaire_inscription === 'Erreur lors de l\'inscription:' ? (<Alert className="mt-1 bg-red-50 border-red-300 text-red-800"><AlertDescription>{Erreur_Formulaire_inscription}</AlertDescription></Alert>) : null}
            <Button className='mx-auto w-[100%] mt-3' type="submit" onClick={getLogin}>Connexion</Button>
        </div>
    );
}