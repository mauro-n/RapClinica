import { useEffect, useState } from 'react'
import { DoctorProfile } from '../DoctorProfile'

interface DoctorAppointmentsTable {
    hours: string[],
    data: any[]
}

export const DoctorAppointmentsTable = ({ hours, data }: DoctorAppointmentsTable) => {

    const [TableHeaders, setTableHeaders] = useState<JSX.Element[]>()
    const [TableBody, setTableBody] = useState<JSX.Element[]>()

    const createTableHeaders = (data: any[]) => {
        const doctors = []
        for (let doctor in data) {
            doctors.push(doctor)
        }

        const ths: JSX.Element[] = doctors.map((doctor) => {
            return (
                <th key={doctor}>
                    <DoctorProfile className='px-3' pSize='sm' name={doctor} />
                </th>
            )
        })

        ths.unshift(<th key={"thead-time"} className='text-transparent cursor-default'>Horários</th>)
        return ths
    }

    const createTableBody = (hours: string[], data: any) => {
        const filterTime = (hour: string, appointments: any[]) => {
            const date = new Date(hour)

            return appointments.filter((appointment) => {
                if (new Date(appointment.schedule).getHours() >= date.getHours() ||
                    new Date(appointment.schedule).getHours() < date.getHours()) {
                        return true;
                }
            })

        }        

        for (let x in data) {
            //console.log(data[x])
        }

        let cols = []
        const table = hours.map((hour) => {
            cols = filterTime(hour, data)            

            return (
                <tr key={hour}>
                    <td className='border'>
                        <div className='text-center'>
                            {hour}
                        </div>
                    </td>
                    

                </tr>
            )
        })

        return table

    }


    useEffect(() => {
        if (!data) return
        setTableHeaders(createTableHeaders(data))
        setTableBody(createTableBody(hours, data))
    }, [data])

    return (
        <table className="mt-2 block overflow-x-scroll max-w-full">
            <thead>
                <tr>
                    {TableHeaders}
                </tr>
            </thead>
            <tbody>
                {TableBody}
            </tbody>

        </table>
    )
}
