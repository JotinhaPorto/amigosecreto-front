import { SearchResult } from "@/app/type/SearchResult"

type SearchRevealProps = {
    result: SearchResult
}
const SearchReveal = ({ result }: SearchRevealProps) => {
    return (
        <div className="flex gap-2">
            {result.person.name}
            tirou
            {result.personMatched.name}
        </div>
    )
}

export default SearchReveal