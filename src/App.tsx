import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SidebarWrapper } from './pages/SidebarWrapper'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SidebarWrapper />}>
          <Route index element={<>oi</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App