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
    <div className='flex items-center justify-between px-6 py-3'>
      {/* logo */}
      <img src={logo} alt="logo" className='h-15 w-45' />

      {/* Navbar links */}
      <nav className='flex gap-12 text-2sm font-semibold text-green-950'>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/features'} >Features</NavLink>
        <NavLink to={'/about'} >About</NavLink>
        <NavLink to={'/contact'} >Contact</NavLink>
      </nav>

      {/* login button */}
      <Button text={'Login'} handleClick={navigateToLogin} className='px-6 py-1.5' />
    </div>
  )
}

export default Navbar
