interface userProps {
    id: number;
    mdp: string;
    name: string;
    theme: string;
    created_at: string;
}

export default function PresentationUser(user:userProps){

    return(
        <div className="md:col-span-2 mb-5 flex mb-5">
            {user.name}
        </div>
    );

}