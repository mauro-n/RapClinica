import { Tag } from "../Tag"

interface AppointmentLineMobile {
    title?: string,
    confirmed?: number,
    pending?: number
}

export const HourAppointmentLineMobile = ({ title, confirmed = 0, pending = 0 }: AppointmentLineMobile) => {
    return (
        <div className="flex gap-4 border-b pb-1">
            <div>
                {title}
            </div>
            <div className="flex-grow flex justify-center gap-2">
                {confirmed > 0 ?
                    <Tag
                        className="flex-grow max-w-28"
                        variant="success">
                        {confirmed} confirmadas
                    </Tag> : <></>
                }
                {pending > 0 ?
                    <Tag
                        className="flex-grow max-w-28">
                        {pending} pendente
                    </Tag> :
                    <></>
                }
            </div>
        </div>
    )
}
