import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className='flex bg-[#F7F3EA] w-full min-h-screen'>
      {/* Sidebar */}
      <Sidebar />
    

      {/* Dashboard Content */}
      <section className='flex-3'>
        <Outlet/>
      </section>
    </div>
  )
}

export default LandingPage
