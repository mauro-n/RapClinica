import { useEffect, useState } from 'react'
import { DoctorCard } from '../DoctorCard'
import { DoctorProfile } from '../DoctorProfile'

interface DayAppointmentsTable {
    hours: string[],
    data: any[]
}

export const DayAppointmentsTable = ({ hours, data }: DayAppointmentsTable) => {

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
                    <DoctorProfile name={doctor} />
                </th>
            )
        })

        ths.unshift(<th key={"thead-time"}>Horários</th>)
        return ths
    }

    const createTableBody = (hours: string[], data: any) => {
        const filterTime = (hour: string) => {
            const date = new Date(hour)
            console.log(date)
            // if () {
            //     return true
            // }
            // return false
        }

        filterTime("2018-10-12T14:37:37.083Z")

        return hours.map((hour) => {
            return (
                <tr key={hour}>
                    <td>{hour}</td>
                    {data.map((el: any, j: number) => {
                        console.log(el)
                        return <div key={j}></div>
                    })}
                </tr>
            )
        })

    }


    useEffect(() => {
        if (!data) return
        console.log(data)
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
