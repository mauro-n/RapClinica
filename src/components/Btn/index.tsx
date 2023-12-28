interface Btn extends
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    as?: React.ElementType,
    icon?: React.ReactNode,
    variant?: 'warning' | 'primary' | 'primary:unfocus' | 'gray'
}

export const Btn = ({ children, className, variant = "primary", as = "button", icon, ...props }: Btn) => {
    const As = as
    const variants = new Map()
    variants.set('warning', 'text-red-500 border-red-400')
    variants.set('primary', 'text-white bg-blue-500 border-blue-500')
    variants.set('primary:unfocus', 'text-black border-blue-500')
    variants.set('gray', "text-black border-black")

    return (
        <As {...props} className={`${className} ${variants.get(variant)} border rounded px-3 py-1 `}>
            <div className="flex items-center gap-1">
                {icon ? icon : <></>}
                {children}
            </div>
        </As>
    )
}
