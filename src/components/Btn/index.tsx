interface Btn extends
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    as?: React.ElementType,
    icon?: React.ReactNode
}

export const Btn = ({ children, className, as = "button", icon, ...props }: Btn) => {
    const As = as
    return (
        <As {...props} className={`${className} border rounded px-3 py-1 text-red-500 border-red-400`}>
            <div className="flex items-center gap-1">
                {icon ? icon : <></>}
                {children}
            </div>
        </As>
    )
}
