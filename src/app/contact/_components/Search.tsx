import { Search } from "lucide-react"

type SearchInputProps = {
    inputHandler: (_event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ inputHandler }: SearchInputProps) => {
    return <div className="flex items-center gap-2 bg-gray-300 p-2 rounded-xl">
        <Search />
        <input type="text" className="outline-none w-full h-full" placeholder="Search" onChange={inputHandler} />
    </div>
}
 