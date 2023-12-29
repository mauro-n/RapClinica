import { DoctorProfile } from "../DoctorProfile"
import { Tag } from "../Tag"

interface DoctorCard {
    doctorName?: string,
    doctorProfilePic?: string,
    doctorUrl?: string,
    hourGrid?: string[],
}

export const DoctorCard = ({ doctorName = "lorem ipsum", doctorProfilePic, doctorUrl = "#" }: DoctorCard) => {
    return (
        <a href={doctorUrl} className="border-s-4 md:border-s-0 border-blue-400 px-2 py-2 flex md:flex-col gap-4 shadow-md md:shadow-none">
            <DoctorProfile name={doctorName} profilePic={doctorProfilePic} />
            <div className="flex-grow flex flex-col gap-y-1 justify-center">
                <Tag>
                    Pendente
                </Tag>
                <Tag variant="success">
                    Confirmada
                </Tag>
            </div>
        </a>
    )
}
