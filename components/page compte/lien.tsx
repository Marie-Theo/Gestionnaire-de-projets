interface lienProps {
    id:number;
    site: {
        id:number;
        site:string;
    } | null;
    url:string;
}

export default function lien({props}:{props:{lien:lienProps[]}}) {

const { lien } = props;
    
    return (
    <div>
    <h1>Liens</h1>
    {lien.length > 0 ? (
        lien.map((src) => (
        <div key={src.id} className="pl-5 pr-5">
            {src.site?.site} : &nbsp;
            <a href={src.url} target="_blank" className="text-blue-500 hover:text-blue-600 hover:underline underline-offset-0">
            {src.url}
            </a>
        </div>
        ))
    ) : (
        <div className="pl-5 pr-5">
            aucun lien enregistré
        </div>
    )}
    </div>
    );
}