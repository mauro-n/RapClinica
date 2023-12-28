import { Btn } from "../Btn"
import { DayNavigator } from "../DayNavigator"
import { DoctorProfile } from "../DoctorProfile"
import { useNavigate } from "react-router-dom"

export const DoctorAppointmentPageHeader = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1 className="text-2xl font-medium text-blue-950">
                Consultas:
            </h1>
            <div className="my-5 flex items-center justify-between pe-3">
                <DoctorProfile />
                <Btn variant="gray" onClick={() => navigate(-1)}>
                    Voltar
                </Btn>
            </div>
            <DayNavigator />
        </>
    )
}
