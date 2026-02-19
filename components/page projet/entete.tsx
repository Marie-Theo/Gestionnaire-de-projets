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
}

export default function EnteteArticle({props}:{props:{article:projetProps[]}}){

    const { article } = props;

    console.log('>> '+article);
    return (
        <div>
            <div>{article[0].title}</div>
        </div>
    );
}