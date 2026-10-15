import React from 'react'
import logo from '../assets/logoGreen.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {

  const navigate = useNavigate();
  const navigateToLogin = ()=>{
    navigate('/login')
  }


  return (
    <div className='py-3 flex items-center justify-between px-6 '>
      {/* logo */}
      <img src={logo} alt="logo" className='h-15 w-45' />

      {/* Navbar links */}
      <nav className='flex gap-3 text-2sm font-semibold items-center text-[#012725] '>
        <NavLink to={'/'} className={({isActive}) => {
          return `py-2 px-5 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#012725] text-[#F7F3EA]': 'hover:bg-[#012725] hover:text-[#F7F3EA]'}`
        }} >Home</NavLink>
        <NavLink to={'/features'} className={({isActive}) => {
          return `py-2 px-5 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#012725] text-[#F7F3EA]': 'hover:bg-[#012725] hover:text-[#F7F3EA]'}`
        }}>Features</NavLink>
        <NavLink to={'/about'} className={({isActive}) => {
          return `py-2 px-5 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#012725] text-[#F7F3EA]': 'hover:bg-[#012725] hover:text-[#F7F3EA]'}`
        }} >About</NavLink>
        <NavLink to={'/contact'} className={({isActive}) => {
          return `py-2 px-5 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#012725] text-[#F7F3EA]': 'hover:bg-[#012725] hover:text-[#F7F3EA]'}`
        }} >Contact</NavLink>
      </nav>

      {/* login button */}
      <Button text={'Login'} handleClick={navigateToLogin} className='px-6 py-1.5 transition-all duration-300 hover:bg-[#023835]'/>
    </div>
  )
}

export default Navbar
