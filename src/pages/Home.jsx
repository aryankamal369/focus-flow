import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import sideImg from '../assets/sideImg.png'
import { AlarmClockCheck, ChartNoAxesCombined, ChevronRight, Goal, ListChecks, TimerReset } from 'lucide-react'

const Home = () => {

  const features = [
    {
      icon: <ListChecks />,
      feature: 'TO-Do List'
    },
    {
      icon: <AlarmClockCheck />,
      feature: 'Focus Sessions'
    },
    {
      icon: <TimerReset />,
      feature: 'Timers & Stopwatch'
    },
    {
      icon: <ChartNoAxesCombined />,
      feature: 'Analytics'
    },
    {
      icon: <Goal />,
      feature: 'Goals & Streaks'
    }
  ]

  return (
    <div className='bg-[#F7F3EA] w-full min-h-screen'>
      <Navbar />


    {/* main section */}
      <section className='flex items-center justify-center'>
        {/* left content */}
        <div className='flex-1 flex flex-col gap-6 items-start ml-10 mt-4'>
          <h1 className='text-6xl font-bold text-[#012725] max-w-100'>Plan your day. <span className='text-transparent' style={{WebkitTextStroke: '1px #012725'}}>Focus on</span> what <span className='text-transparent' style={{WebkitTextStroke: '1px #012725'}}>matters</span>. Track your <span className='text-transparent' style={{WebkitTextStroke: '1px #012725'}} >progress</span> </h1>
          <p className='text-md text-green-950 font-semibold max-w-130'>
            Your all-in-one productivity companion. Manage tasks, focus, track time and achieve your goals - all in one place.
          </p>

          <Button text={`Get Started Free`} className='px-5 py-3 transition-all duration-300 hover:bg-[#023835]' />
        </div>

        {/* right contect */}
        <div className='flex-1 flex items-center justify-center'>
          <img src={sideImg} className='max-h-130 max-w-120' />
        </div>
      </section>

      {/* bottom feature list */}
      <div className='flex justify-center items-center'>

        <div className=' flex w-[55%] h-fit items-center justify-between text-sm font-semibold mt-8'>
        {
          features.map((feature)=>(
            <div className='flex gap-1 items-center '>
              {feature.icon}
              {feature.feature}
            </div>
          ))
        }
      </div>

      </div>
      

    </div>
  )
}

export default Home
