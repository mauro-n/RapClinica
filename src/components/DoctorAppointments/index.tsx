
import { HourAppointmentLineMobile } from "../HourAppointmentLineMobile"

// this component renders all the
// appointments for a given doctor
// on a given day
export const DoctorAppointments = () => {
  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
  return (
    <ul>
      {hours.map((el, i) => {
        return <li key={i}><HourAppointmentLineMobile title={el} /></li>
      })}
    </ul>
  )
}
