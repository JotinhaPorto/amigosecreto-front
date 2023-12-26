import * as api from '@/app/api/site'

type Props = { params: { id: string } }

const page = async ({ params }: Props) => {

    const event = await api.getEvent(parseInt(params.id))

    return (
        <div>
            {JSON.stringify(event)}
            
        </div>
    )
}

export default page