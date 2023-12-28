import { Outlet } from "react-router-dom"

interface AppointmentPage {
    header: React.ReactNode
}

export const AppointmentPage = ({ header }: AppointmentPage) => {
    return (
        <div className="pe-6">
            {header}            
            <div className="mt-5">
                <Outlet />
            </div>
        </div>
    )
}
