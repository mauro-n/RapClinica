import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

interface SideNavlinkDropdown extends React.HTMLProps<HTMLAnchorElement> {
    text: string,
    icon: React.ReactNode,
    links: SideNavlink[]
}

export const SideNavlinkDropdown = ({ links = [], text, icon }: SideNavlinkDropdown) => {
    const [isExpanded, setIsExpanded] = useState(true)

    const switchExpanded = () => {
        setIsExpanded((prev) => !prev)
    }

    return (
        <section className={`${isExpanded ? "mb-1" : ""}`}>
            <h2
                className='flex items-center justify-between'
                onClick={() => { switchExpanded() }}
            >
                <a className={`border-s-4 border-transparent rounded flex gap-3 align-center ps-2 py-2`}>
                    <div className="text-blue-950">{icon}</div>
                    <p className="text-blue-950">
                        {text}
                    </p>
                </a>
                {isExpanded ?
                    <FontAwesomeIcon icon={faMinus} />
                    : <FontAwesomeIcon icon={faPlus} />
                }
            </h2>
            <ul className={`ps-5 overflow-hidden ${isExpanded ? "h-max" : "h-0"}`}>
                {links.map((link, i) => {
                    return <li key={i}><>{link}</></li>
                })}
            </ul>
        </section>
    )
}




