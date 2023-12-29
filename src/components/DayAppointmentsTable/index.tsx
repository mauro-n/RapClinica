import { DoctorCard } from '../DoctorCard'

interface DayAppointmentsTable {
    hours: string[]
}

export const DayAppointmentsTable = ( {hours} : DayAppointmentsTable) => {
    return (
        <ul className="mt-2 flex flex-col md:flex-row gap-y-4">
            <li className='flex flex-col hidden md:block'>
                {hours.map((hour) => {
                    return <div>{hour}</div>
                })}
            </li>
            <li>
                <DoctorCard doctorUrl="medico/marcos" />
            </li>

        </ul>
    )
}
