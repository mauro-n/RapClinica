import { Tag } from "../Tag"

interface AppointmentCard {
    patient?: string,
    doctor?: string,
    protocol?: string,
    time?: string,
    date?: string,
    tags?: string[],
    status?: string
}

export const AppointmentCard = () => {
    return (
        <article className="relative border flex items-center rounded overflow-hidden justify-between px-5 py-4">
            <div className="absolute left-0 top-0 bg-red-500 w-2 h-full"></div>
            <section>
                <h3 className="offscreen">Informações do paciente</h3>
                <h4 className="text-blue-950 font-medium">Nome do paciente</h4>
                <p className="-mt-1 mb-2 text-sm font-light">Nome do médico</p>
                <Tag className="rounded-full max-w-max px-3">
                    Retorno
                </Tag>
            </section>
            <section>
                <h3 className="offscreen">Informações da consulta</h3>
                <ul className="text-sm">
                    <li className="h-4 text-blue-400">68686978</li>
                    <li className="h-4 text-blue-950">16:00h</li>
                    <li className="h-4 text-blue-950">12/09/23</li>
                </ul>
            </section>
        </article>
    )
}
