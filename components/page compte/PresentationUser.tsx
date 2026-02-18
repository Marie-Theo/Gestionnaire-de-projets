interface userProps {
    id: number;
    mdp: string;
    name: string;
    theme: string;
    created_at: string;
}

export default function PresentationUser(user:userProps){

    return(
        <div className="col-span-3 mb-5 flex mb-5 grid">
            <div><h1 className="text-4xl">{user.name}</h1></div>
            <div className="p-5">freq frzieqb jfrvqesnb rvbnqei rvbqibn eqbhi freq frzieqb jfrvqesnb rvbnqei rvbqibn eqbhi freq frzieqb jfrvqesnb rvbnqei rvbqibn eqbhi</div>
        </div>
    );

}