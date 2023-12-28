import { DoctorCard } from "../DoctorCard"

// This component should render a list of
// doctors with their appointments for a given
// day
export const AppointmentsByDoctor = () => {
    return (
        <section>
            <h2 className="text-lg text-blue-950 font-medium">
                Consultas por médicos:
            </h2>
            <ul className="mt-2 flex flex-col gap-y-4">
                <li>
                    <DoctorCard doctorUrl="medico/marcos" />
                </li>
                <li>
                    <DoctorCard doctorUrl="medico/marcos" />
                </li>
                <li>
                    <DoctorCard doctorUrl="medico/marcos" />
                </li>
            </ul>
        </section>
    )
}
