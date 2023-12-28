import { SearchResult } from "@/app/type/SearchResult"

type SearchRevealProps = {
    result: SearchResult
}
const SearchReveal = ({ result }: SearchRevealProps) => {
    return (
        <div className="flex flex-col gap-2 p-8">
            <span>Parabéns, <span className="font-bold">{result.person.name}!</span> Você tirou <span className="font-bold">{result.personMatched.name}</span></span>
        </div>
    )
}

export default SearchReveal