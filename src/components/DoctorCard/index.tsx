import { DoctorProfile } from "../DoctorProfile"
import { Tag } from "../Tag"

interface DoctorCard {
    doctorName?: string,
    doctorProfilePic?: string,
    doctorUrl?: string
}

export const DoctorCard = ({ doctorName = "lorem ipsum", doctorProfilePic, doctorUrl = "#" }: DoctorCard) => {
    return (
        <a href={doctorUrl} className="border-s-4 border-blue-400 px-2 py-2 flex gap-4 shadow-md">
            <DoctorProfile name={doctorName} profilePic={doctorProfilePic} />
            <div className="flex-grow flex flex-col gap-y-1 justify-center">
                <Tag>
                    5 Aguardando
                </Tag>
                <Tag variant="success">
                    3 Prontas
                </Tag>
            </div>
        </a>
    )
}
