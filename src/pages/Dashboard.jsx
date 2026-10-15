import { BellDot, CalendarDays } from 'lucide-react'
import React from 'react'
import TaskStatus from '../features/TaskStatus';

const Dashboard = () => {

  const today = new Date();

  const day = today.toLocaleDateString('en-IN', {
    weekday: 'long'
  })

  const date = today.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })



  return (
    <div className='px-5 py-6 flex flex-col gap-6'>

      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl font-bold text-[#012725]'>Good Morning, Aryan</h1>
          <p className='text-2sm text-gray-600 font-semibold mt-1'>Here's your productivity overview for today.</p>
        </div>

        <div className='flex items-center gap-6 mr-6'>
          <div className='flex items-center gap-1 border border-gray-300 font-semibold text-gray-800 rounded-lg px-4 py-1.5'>
              <CalendarDays size={20} />
              <h2>{day},</h2>
              <h2>{date}</h2>
          </div>
          <div className='bg-[#f3f2f0] rounded-full p-3 shadow-sm'>
              <BellDot />
          </div>

        </div>
      </div>

      {/* Task status */}
      <TaskStatus/>
       
    </div>
  )
}

export default Dashboard
