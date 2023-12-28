'use client'
import { formatCpf } from '@/app/utils/formatCpf';
import React, { useState } from 'react'

type SearchFormProps = {
    handleSearch: (cpf: string) => void;
    errorMessage: string;
    loading: boolean;
}

const SearchForm = ({ handleSearch, errorMessage, loading }: SearchFormProps) => {

    const [cpf, setCpf] = useState('')


    return (
        <div className='flex flex-col gap-2 pt-2  p-2 items-center'>
            <label htmlFor="small-input" className="block mb-2 font-medium text-gray-900 dark:text-white">Qual seu CPF</label>
            <input
                type="text"
                value={cpf}
                disabled={loading}
                inputMode='numeric'
                className='block w-full p-2 text-gray-900 rounded-lg outline-none disabled:opacity-45'
                onChange={(e) => setCpf(formatCpf(e.target.value))}
                placeholder='Digite seu CPF' />
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            <button
                onClick={() => handleSearch(cpf)}
                className='text-white bg-blue-600 max-w-fit p-2 rounded transition-all hover:bg-blue-500 disabled:opacity-45'
                disabled={loading}
            >
                {loading ? 'Buscando...' : 'Buscar'}
            </button>
        </div>
    )
}

export default SearchForm