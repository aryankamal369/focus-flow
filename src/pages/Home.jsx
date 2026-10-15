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
          <h1 className='text-6xl font-bold text-[#012725] max-w-100'>Plan your day. Focus on what matters. Track your progress. </h1>
          <p className='text-md text-green-950 font-semibold max-w-130'>
            Your all-in-one productivity companion. Manage tasks, focus, track time and achieve your goals - all in one place.
          </p>

          <Button text={`Get Started Free >`} className='px-4 py-3' />
        </div>

        {/* right contect */}
        <div className='flex-1 flex items-center justify-center'>
          <img src={sideImg} className='max-h-130 max-w-120' />
        </div>
      </section>

      {/* bottom feature list */}
      <div className='flex items-center justify-evenly text-sm font-semibold mt-8'>
        {
          features.map((feature)=>(
            <div className='flex gap-1 text-green-950 items-center'>
              {feature.icon}
              {feature.feature}
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Home
