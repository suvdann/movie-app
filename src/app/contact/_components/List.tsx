import { Person } from "../page";

type ListProps = {
    name?: string;
    nickName: string;
    myContacts: Array<Person>
}

export const List = ({ name, nickName, myContacts }: ListProps) => {
    return <div className="flex gap-1 text-2xl p-2 border-b-1 last:border-none">
        <p>{name}</p>
        <p className="font-semibold">{nickName}</p>
    </div>
}