import { Btn } from "../Btn"
import { DayNavigator } from "../DayNavigator"
import { useNavigate, useLocation } from "react-router-dom"

export const AppointmentPageHeaderMobile = () => {
    const navigate = useNavigate()
    const path = useLocation().pathname
    const dayViewPath = "/consultas/dia"
    const doctorViewPath = "/consultas/medico"

    return (
        <>
            <h1 className="text-2xl font-medium text-blue-950">
                Consultas:
            </h1>
            <nav className="flex gap-4 my-5">
                <Btn
                    role="link"
                    variant={`${path === doctorViewPath ? "primary" : "primary:unfocus"}`}
                    onClick={() => navigate("medico")}
                >
                    Médicos
                </Btn>
                <Btn
                    role="link"
                    variant={`${path === dayViewPath ? "primary" : "primary:unfocus"}`}
                    onClick={() => navigate("dia")}
                >
                    Dia
                </Btn>
            </nav>
            <DayNavigator />
        </>
    )
}
