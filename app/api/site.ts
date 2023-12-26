import { req } from '@/app/api/axios'
import { Event } from '../type/Event'

export const getEvent = async (id: number): Promise<Event | false> => {
    const res = await req.get(`/events/${id}`)
    return res.data.events as Event ?? false
}

