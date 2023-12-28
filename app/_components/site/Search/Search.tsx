'use client'

import { SearchResult } from '@/app/type/SearchResult'
import React, { useState } from 'react'
import SearchForm from './SearchForm'
import * as api from '@/app/api/site'
import SearchReveal from './SearchReveal'
import axios from 'axios'

type SearchProps = {
    id: string;
}

const Search = ({ id }: SearchProps) => {

    const [result, setResult] = useState<SearchResult>()

    const handleSearchFormCpf = async (cpf: string) => {
        const res = await api.searchCpf(parseInt(id), cpf)
        setResult(res)
    }



    return (
        <div>
            {!result && < SearchForm handleSearch={handleSearchFormCpf} />}
            {result && <SearchReveal result={result} />}
        </div>
    )
}

export default Search