interface HamburguerBtn extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    as?: React.ElementType,
    isOpen?: boolean
}

export const HamburguerBtn = ({ as = "button", isOpen, ...props }: HamburguerBtn) => {
    const As = as
    const genericHamburgerLine = `h-1 w-6 mb-1 rounded-full bg-blue-950 transition ease transform duration-300`;

    return (
        <As {...props} className="flex flex-col h-12 w-12 justify-center items-center group">
            <div
                className={`${genericHamburgerLine} ${isOpen
                    ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                    }`}
            />
            <div
                className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                    }`}
            />
            <div
                className={`${genericHamburgerLine} ${isOpen
                    ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                    }`}
            />
        </As>
    )
}
