
export default function Article({props}: {props: { projets: any[], outil: any[], outils: any[], etat: any[], users: any[], lastProjets: any[], setPage: (page: string) => void, projetN: number, setProjetN: (projetN: number) => void}}) {

    const { projets, outil, outils, etat, users, lastProjets, setPage, projetN, setProjetN } = props;

    if (projetN === 0) {
        setPage("projets");
    }

    return (
        <div></div>
    );
}