import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SideNavlink } from "../SideNavlink"
import { faCalendar, faCoffee, faMagnifyingGlass, faPlus, faTv, faUser } from "@fortawesome/free-solid-svg-icons"
import { SideNavlinkDropdown } from "../SideNavlinkDropdown"
import { Btn } from "../Btn"

interface Sidebar {
    isExpanded?: boolean,
    expandFunction?: any
}

export const Sidebar = ({ isExpanded = false }: Sidebar) => {
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
        <aside className={`${isExpanded ? "z-20" : "-translate-x-full md:translate-x-0"} absolute md:relative w-2/3 md:w-full h-screen flex flex-col bg-white transition-transform pt-4`}>
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
                                href="/consultas/medico"
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
    )
}

//<div className={`${isExpanded ? "" : "-z-10 md:z-0"} absolute md:relative top-0 left-0 w-full h-screen flex justify-start md:border-e`}></div>
//</div>