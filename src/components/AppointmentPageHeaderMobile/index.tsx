import { Btn } from "../Btn"

export const AppointmentPageHeaderMobile = () => {
    return (
        <>
            <h1 className="text-2xl font-medium text-blue-950">
                Consultas:
            </h1>
            <nav className="flex gap-4 mt-5">
                <Btn role="link">
                    Médicos
                </Btn>
                <Btn role="link" variant="primary:unfocus">
                    Dia
                </Btn>
            </nav>
        </>
    )
}
