// Renders the appointments for
// a given day
export const DayAppointmentsMobile = () => {
    return (
        <table className=" w-full">
            <thead>
                <tr className="text-gray-500 -translate-y-1">
                    <th className="text-start"></th>
                    <th className="text-start">Nome</th>
                    <th className="text-start">Horário</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b">
                    <td>
                        <div className="bg-red-500 rounded-full block w-2 h-2"></div>
                    </td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>18:00</td>
                </tr>
                <tr className="border-b">
                    <td>
                        <div className="bg-red-500 rounded-full block w-2 h-2"></div>
                    </td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>18:00</td>
                </tr>
                <tr className="border-b">
                    <td>
                        <div className="bg-red-500 rounded-full block w-2 h-2"></div>
                    </td>
                    <td>Lorem ipsum dolor sit.</td>
                    <td>18:00</td>
                </tr>
            </tbody>
        </table >
    )
}
