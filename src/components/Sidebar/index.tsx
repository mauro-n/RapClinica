import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SideNavlink } from "../SideNavlink"
import { faCalendar, faCoffee, faMagnifyingGlass, faPlus, faTv, faUser } from "@fortawesome/free-solid-svg-icons"
import { SideNavlinkDropdown } from "../SideNavlinkDropdown"
import { Btn } from "../Btn"

interface Sidebar {
    isExpanded?: boolean,
    expandFunction?: any
}

export const Sidebar = ({ isExpanded = true }: Sidebar) => {
    const patientLinks = [
        <SideNavlink
            text="Buscar"
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            href="/"
        />,
        <SideNavlink
            text="Cadastrar"
            icon={<FontAwesomeIcon icon={faPlus} />}
            href="/"
        />] as unknown as SideNavlink[]

    return (
        <div className={`absolute top-0 left-0 w-full h-screen flex justify-start`}>
            <aside className={`w-2/3 h-screen flex flex-col bg-white z-20 transition-transform ${isExpanded ? "" : "-translate-x-full"}`}>
                <header className="my-6">
                    <h2 className="text-center font-black text-xl">
                        RapClínica
                    </h2>
                </header>
                <nav className="mb-6">
                    <h3 className="text-center text-blue-950 tracking-wide font-thin">
                        RECEPÇÃO
                    </h3>
                    <hr className="max-w-64 mx-auto mt-2 mb-4" />
                    <nav className="px-4">
                        <ul>
                            <li>
                                <SideNavlink
                                    text="Consultas"
                                    icon={<FontAwesomeIcon icon={faCalendar} />}
                                    href="/"
                                />
                            </li>
                            <li>
                                <SideNavlinkDropdown
                                    text="Pacientes"
                                    icon={<FontAwesomeIcon icon={faUser} />}
                                    href="/"
                                    links={patientLinks}
                                />
                            </li>
                            <li>
                                <SideNavlink
                                    text="Modo exibição"
                                    icon={<FontAwesomeIcon icon={faTv} />}
                                    href="/"
                                />
                            </li>
                        </ul>
                    </nav>
                </nav>
                <section>
                    <hr />
                    <section className="text-center mt-6">
                        <h2 className="mb-3">
                            Nome de Usuário
                        </h2>
                        <Btn icon={<FontAwesomeIcon icon={faCoffee} />}>
                            Sair
                        </Btn>
                    </section>
                </section>
            </aside>
        </div>
    )
}