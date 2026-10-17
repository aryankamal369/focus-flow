import React from 'react'
import logo from '../assets/logoWhite.png'
import SidebarLinks from './SidebarLinks'
import { AlarmClockCheck, ChartNoAxesCombined, CircleCheckBig, Goal, NotepadText, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const links = [
        { 
            icons: <NotepadText />,
            title:'Dashboard', 
            path: '/landingpage/dashboard'
        },
        { 
            icons:  <CircleCheckBig />,
            title:'My Tasks', 
            path: '/landingpage/mytasks'
        },
        { 
            icons: <AlarmClockCheck />,
            title:'Focus Mode', 
            path: '/landingpage/focusmode'
        },
        { 
            icons: <ChartNoAxesCombined />,
            title:'Analytics', 
            path: '/landingpage/analytics'
        },
        { 
            icons: <Goal />,
            title:'Goals', 
            path: '/landingpage/goals'
        },
        { 
            icons: <Settings />,
            title:'Settings', 
            path: '/landingpage/settings'
        }
        
    ]
    

    const navigate = useNavigate();
    const navigateToHomePage = ()=>{
        navigate('/');
    }


  return (
    <div className='flex flex-col bg-[#012725] w-[17vw] shadow-lg text-white px-6 py-3'>

       {/* logo  */}
       <img src={logo} alt="logo" className='h-15 w-45' onClick={navigateToHomePage} /> 

        {/* Sidebar Links */}
        <nav className='flex flex-col gap-1 text-lg mt-10'>
            {links.map((link)=>(
                <SidebarLinks key={link.path} to={link.path} 
                className={({isActive})=>
                    `p-3 rounded-lg transition-colors flex gap-2 items-center ${isActive ? 'bg-green-900' : ''}`
                }
                >
                    {link.icons}  { /* Icons predict suggested by AYUSH */ }
                    {link.title}
                </SidebarLinks>
            ))}
        </nav>

    </div>
  )
}

export default Sidebar
