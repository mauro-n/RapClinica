import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tag } from "../Tag"
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons"

interface AppointmentCard {
    patient?: string,
    doctor?: string,
    protocol?: string,
    time?: string,
    date?: string,
    tags?: string[],
    status?: "pending" | "confirmed"
}

export const AppointmentCard = ({
    patient = "Patient Lorem",
    doctor = "Doctor Ipsum",
    protocol = "12345678",
    time = "00:00h",
    date = "01/01/2024",
    tags = ["Retorno"],
    status = "pending" }: AppointmentCard) => {

    const statusMap = {
        pending: "bg-neutral-400",
        confirmed: "bg-green-400"
    }

    return (
        <article className="relative border flex items-center rounded overflow-hidden justify-between px-5 py-4">
            <div className={`${statusMap[status]} absolute left-0 top-0 w-2 h-full`}></div>
            <section>
                <h3 className="offscreen">Informações do paciente</h3>
                <h4 className="text-blue-950 font-medium">{patient}</h4>
                <div className="flex gap-1 items-center mb-2">
                    <FontAwesomeIcon icon={faUserDoctor} className="text-blue-300" />
                    <p className="text-sm font-light">{doctor}</p>
                </div>
                {tags.map((el, i) => {
                    return (
                        <Tag key={i} className="rounded-full max-w-max px-3 text-sm">
                            {el}
                        </Tag>
                    )
                })}

            </section>
            <section>
                <h3 className="offscreen">Informações da consulta</h3>
                <ul className="text-sm">
                    <li className="h-4 text-blue-400">{protocol}</li>
                    <li className="h-4 text-blue-950">{time}</li>
                    <li className="h-4 text-blue-950">{date}</li>
                </ul>
            </section>
        </article>
    )
}
