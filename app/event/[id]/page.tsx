import Search from '@/app/_components/site/Search/Search'
import * as api from '@/app/api/site'
import { redirect } from 'next/navigation'

type Props = { params: { id: string } }

const page = async ({ params }: Props) => {

    const event = await api.getEvent(parseInt(params.id))

    if (!event) {
        return redirect('/')
    }



    return (
        <main className='max-w-lg mx-auto text-white text-center p-4'>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold text-blue-400'>Secret</h1>
                <h2 className='text-2xl mt-5 mb-2'>{event.title}</h2>
                <p>{event.Description}</p>
            </div>


            <Search id={params.id} />
        </main>
    )
}

export default page