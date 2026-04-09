import React from 'react'
import Display from './Pages/Display'
import Navbar from './Components/Navbar'
import { Footer } from './Components/Footer'


function App() {

  return (
    <>
      <div className="bg-white dark:bg-[#162c4e] text-gray-800 dark:text-gray-300 min-h-screen transition-colors duration-300">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <Navbar />
        <Display />
        <Footer />

      </div>
    </>
  )
}

export default App
