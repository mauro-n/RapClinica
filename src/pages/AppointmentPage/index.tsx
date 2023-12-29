import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

interface AppointmentPage {
    header: React.ReactNode
}

export const AppointmentPage = ({ header }: AppointmentPage) => {
    const [appointments, setAppointments] = useState()

    const fetchAppointments = async () => {
        const data = await fetch("https://658d5c7c7c48dce947390780.mockapi.io/api/v1/consulta")
        const result = await data.json()
        setAppointments(result)
    }

    useEffect(() => {
        fetchAppointments()
    }, [])

    return (
        <div className="pe-6">
            {header}
            <div className="mt-5">
                <Outlet context={{ appointments, setAppointments }} />
            </div>
        </div>
    )
}
