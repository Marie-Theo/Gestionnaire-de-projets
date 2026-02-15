import { Card } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { tools } from "./tools";

interface userProps {
    id: number;
    created_at: string;
    name: string;
    theme: string;
}

export default function Menu({props}: {props:{user: userProps, page: string, setPage: (page: string) => void}}) {
    const {user, page, setPage} = props;

    return (
    <Card className="fixed bottom-[2%] left-[15%]  w-[70%] max-h-[10%] bg-white border-t border-gray-200 pt-[1%] pb-[1%]">
        <div className="container mx-auto flex justify-around">
            { user.name !=='' ?
                <Button variant={tools.isPage(page, "Nouveaux")} onClick={() => setPage("Nouveaux")} className="text-xl">Nouveaux</Button>
                : null
            }
            <Button variant={tools.isPage(page, "projets")} onClick={() => setPage("projets")} className="text-xl">Projets</Button>
            <Button variant={tools.isPage(page, "a-propos")} onClick={() => setPage("a-propos")} className="text-xl">À propos</Button>
            { user.name !=='' ? 
                <Button variant={tools.isPage(page, "compte")} onClick={() => setPage("compte")} className="text-xl">Compte</Button>
                : <Button variant={tools.isPage(page, "Connexion")} onClick={() => setPage("Connexion")} className="text-xl">Connexion</Button>
            }
        </div>
    </Card>
    );}