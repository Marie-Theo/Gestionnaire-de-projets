interface userProps {
    id: number;
    mdp: string;
    name: string;
    theme: string;
    created_at: string;
}

export default function PresentationUser(user:userProps){

    return(
        <div className="col-span-2">
            {user.name}
        </div>
    );

}