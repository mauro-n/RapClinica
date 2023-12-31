import './App.css'
import { HamburguerBtn } from './components/HamburgerBtn'
import { Sidebar } from './components/Sidebar'
import { useState } from 'react'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const switchSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  return (
    <div className='relative w-screen h-screen'>
      <Sidebar isExpanded={isSidebarOpen} />
      <div
        className={`absolute w-full h-full transition-colors ${isSidebarOpen ? "bg-black/5" : ""} z-10`}
        onClick={isSidebarOpen ? switchSidebar : () => { }}
      />
      <div className="absolute top-6 right-6 z-20">
        <HamburguerBtn isOpen={isSidebarOpen} onClick={switchSidebar} />
      </div>
    </div>
  )
}

export default App