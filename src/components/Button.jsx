import React from 'react'

const Button = ({text, className='', handleClick, Icon}) => {
  return (
    <button onClick={handleClick} className={`bg-[#012725] text-white flex gap-2 items-center rounded-xl cursor-pointer ${className}`}>
        {Icon && <Icon size={18} />}
        {text}
    </button>
  )
}

export default Button
