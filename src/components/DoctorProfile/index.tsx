// should rendere the doctor profile pic
// and name

interface DoctorProfile extends React.HTMLProps<HTMLDivElement> {
    name?: string,
    profilePic?: string,
    pSize?: "sm" | "md"
}

export const DoctorProfile = ({
    name = "lorem ipsum",
    profilePic = "https://placehold.co/300x300",
    pSize = "md",
    className
}: DoctorProfile) => {
    const sizes = {"sm": "w-12 h-12", "md": "w-16 h-16"}
    const fontSizes = {"sm": "text-sm leading-4 font-medium text-blue-950", "md": "text-md"}
    return (
        <figure className={`${className} flex items-center gap-2 md:flex-col justify-center`}>
            <img
                src={profilePic}
                alt="Doctor's Photo"
                className={`rounded-full ${sizes[pSize]}`}
            />
            <figcaption className={`w-24 ${fontSizes[pSize]}`}>
                {name}
            </figcaption>
        </figure>
    )
}
