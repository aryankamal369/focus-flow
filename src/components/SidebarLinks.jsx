import React, {children} from 'react'
import { NavLink } from 'react-router-dom'

const SidebarLinks = ({to, children, className}) => {
  return (
    <NavLink to={to} className={className} >
        {children}
    </NavLink>
  )
}

export default SidebarLinks
