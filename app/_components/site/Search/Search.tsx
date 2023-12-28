'use client'

import { SearchResult } from '@/app/type/SearchResult'
import React, { useEffect, useState } from 'react'
import SearchForm from './SearchForm'
import * as api from '@/app/api/site'
import SearchReveal from './SearchReveal'
import axios from 'axios'

type SearchProps = {
    id: string;
}

const Search = ({ id }: SearchProps) => {

    const [result, setResult] = useState<SearchResult>()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSearchFormCpf = async (cpf: string) => {
        setIsLoading(true)
        await api.searchCpf(parseInt(id), cpf)
            .then((res) => {
                console.log(res)
                if (res) {
                    setResult(res)
                }
            })
            .catch((err) => {
                setError(err.message)
            })
        setIsLoading(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 3000);
    }, [error])

    return (
        <div className='bg-blue-800/40 rounded-lg'>
            {!result &&
                < SearchForm
                    handleSearch={handleSearchFormCpf} 
                    errorMessage={error}
                    loading={isLoading}
                />}
            {result && <SearchReveal result={result} />}
        </div>
    )
}

export default Search