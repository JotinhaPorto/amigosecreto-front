import { req } from '@/app/api/axios'
import { Event } from '../type/Event'
import { SearchResult } from '../type/SearchResult'

export const getEvent = async (id: number): Promise<Event | false> => {
    const res = await req.get(`/events/${id}`)
    return res.data.events as Event ?? false
}

export const searchCpf = async (eventId: number, cpf: string): Promise<SearchResult | false> => {
    const res = await req.get(`/events/${eventId}/search?cpf=${cpf}`)
    if (res.data.person && res.data.personMatched) {
        return res.data as SearchResult
    }
    throw new Error('Cpf não encontrado')
}
