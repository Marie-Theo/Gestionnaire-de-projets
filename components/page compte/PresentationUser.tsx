import { userProps } from "@/hooks/interface";

export default function PresentationUser(user:userProps){

    return(
        <div className="col-span-3 mb-5 flex mb-5 grid">
            <div><h1 className="text-4xl">{user.name}</h1></div>
            <div className="p-5">{user.presentation}</div>
        </div>
    );

}