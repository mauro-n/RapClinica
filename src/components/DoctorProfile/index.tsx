// should rendere the doctor profile pic
// and name

interface DoctorProfile {
    name?: string,
    profilePic?: string
}

export const DoctorProfile = ({
    name = "lorem ipsum", profilePic = "https://placehold.co/300x300"
}: DoctorProfile) => {
    return (
        <figure className="flex items-center gap-2">
            <img
                src={profilePic}
                alt="Doctor's Photo"
                className="rounded-full w-16 h-16"
            />
            <figcaption className="w-24">
                {name}
            </figcaption>
        </figure>
    )
}
