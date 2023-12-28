'use client'
import { formatCpf } from '@/app/utils/formatCpf';
import React, { useState } from 'react'

type SearchFormProps = {
    handleSearch: (cpf: string) => void;
}

const SearchForm = ({ handleSearch }: SearchFormProps) => {

    const [cpf, setCpf] = useState('')


    return (
        <div>
            <p>Digite seu cpf</p>
            <input type="text" value={cpf} inputMode='numeric' className='text-black ' onChange={(e) => setCpf(formatCpf(e.target.value))} />
            <button onClick={() => handleSearch(cpf)}>Enviar</button>
        </div>
    )
}

export default SearchForm