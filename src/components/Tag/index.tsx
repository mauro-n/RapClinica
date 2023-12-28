interface Tag extends React.HTMLProps<HTMLDivElement> {
    variant?: "success" | "secondary"
}

export const Tag = ({ className, variant = "secondary", children }: Tag) => {
    const variants = new Map()
    variants.set("secondary", "bg-neutral-200")
    variants.set("success", "bg-green-400")
    return (
        <div className={`${className} ${variants.get(variant)} rounded text-center font-thin`}>
            {children}
        </div>
    )
}
