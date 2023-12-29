import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarWrapper } from './pages/SidebarWrapper'
import { AppointmentPage } from './pages/AppointmentPage'
import { AppointmentsByDoctor } from './components/AppointmentsByDoctor'
import { AppointmentPageHeaderMobile } from './components/AppointmentPageHeaderMobile'
import { DoctorAppointmentPageHeader } from './components/DoctorAppointmentPageHeaderMobile'
import { DoctorAppointments } from './components/DoctorAppointments'
import { DayAppointmentsMobile } from './components/DayAppointmentsMobile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/consultas' element={<SidebarWrapper />}>
          <Route path='' element={<AppointmentPage header={<AppointmentPageHeaderMobile />} />} >
            <Route path='dia' element={<DayAppointmentsMobile />} />
            <Route path='medico' element={<AppointmentsByDoctor />} />
          </Route>
          <Route path='medico/:doctorName' element={<AppointmentPage header={<DoctorAppointmentPageHeader />} />}>
            <Route path='' element={<DoctorAppointments />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App