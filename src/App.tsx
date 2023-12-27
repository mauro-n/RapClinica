import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarWrapper } from './pages/SidebarWrapper'
import { DailyAppointmentPage } from './pages/DailyAppointmentPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/consultas' element={<SidebarWrapper />}>
          <Route index element={<DailyAppointmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App