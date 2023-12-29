import { useOutletContext } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { DayAppointmentsTable } from "../DayAppointmentsTable";

// This component should render a list of
// doctors with their appointments for a given
// day
export const AppointmentsByDoctor = () => {
    const { appointments, }: {
        appointments: any[],
        setAppointments: React.Dispatch<React.SetStateAction<string>>
    } = useOutletContext();

    const [formatted, setFormated] = useState([])

    const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

    useEffect(() => {
        if (Array.isArray(appointments)) {
            const renderAppointments = appointments.reduce((acc: any, curr: any) => {
                if (acc[curr.doctorName]) {
                    acc[curr.doctorName].push({
                        patientName: curr.patientName,
                        schedule: curr.schedule,
                        status: curr.status
                    })
                } else {
                    acc[curr.doctorName] = []
                    acc[curr.doctorName].push({
                        patientName: curr.patientName,
                        schedule: curr.schedule,
                        status: curr.status
                    })
                }
                return acc
            }, [])

            setFormated(renderAppointments)
            console.log(formatted)
        }

    }, [appointments])



    return (
        <section>
            <h2 className="text-lg text-blue-950 font-medium">
                Consultas por médicos:
            </h2>
            <DayAppointmentsTable hours={hours} />
        </section>
    )
}
