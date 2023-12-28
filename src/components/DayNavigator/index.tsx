import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// This component navigates
// between days using http

interface DayNavigator {
    today?: string
}

export const DayNavigator = ({ today = "XX de Dezembro" }: DayNavigator) => {
    return (
        <>
            <nav className="border rounded gap-2 px-2 flex w-fit">
                <a href="#" onClick={() => { console.log("oi") }}>
                    <FontAwesomeIcon icon={faAngleUp} className="-rotate-90" />
                </a>
                <p>{today}</p>
                <a href="#">
                    <FontAwesomeIcon icon={faAngleUp} className="rotate-90" />
                </a>
            </nav>
        </>
    )
}
