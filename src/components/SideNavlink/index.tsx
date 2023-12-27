

export const SideNavlink = ({ text, icon, href, isSelected }: SideNavlink) => {
    return (
        <a href={href} className={`${isSelected ? "border-s-4 border-blue-400 bg-blue-50" : "border-s-4 border-transparent"} rounded flex gap-3 align-center ps-2 py-1`}>
            <div className="text-blue-950">{icon}</div>
            <p className="text-blue-950">
                {text}
            </p>
        </a>
    )
}
