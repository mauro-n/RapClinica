import { useState } from "react"
import { HamburguerBtn } from "../../components/HamburgerBtn"
import { Sidebar } from "../../components/Sidebar"
import { Outlet } from "react-router-dom"
import { AppointmentCard } from "../../components/AppointmentCard"

export const SidebarWrapper = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const switchSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    return (
        <>
            <div className='relative w-screen md:flex h-screen'>
                <div className="md:border-e md:me-3 md:w-1/3 lg:w-1/5">
                    <Sidebar isExpanded={isSidebarOpen} />
                    <div
                        className={`md:hidden absolute w-full h-full transition-colors ${isSidebarOpen ? "bg-black/5 z-10" : "-z-10"}`}
                        onClick={isSidebarOpen ? switchSidebar : () => { }}
                    />
                    <div className="absolute top-6 right-6 z-20 md:hidden">
                        <HamburguerBtn isOpen={isSidebarOpen} onClick={switchSidebar} />
                    </div>
                </div>
                <div className="pt-9 ps-6 md:w-2/3 lg:w-1/2">
                    <Outlet />
                </div>
                <section className="hidden lg:block w-1/4">
                    <h2 className="mt-12">
                        Próximas Consultas
                    </h2>
                    <ul>
                        <li>
                            <AppointmentCard />
                        </li>
                    </ul>
                </section>
            </div>

        </>
    )
}
