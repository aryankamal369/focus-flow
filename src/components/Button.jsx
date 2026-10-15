import React from 'react'

const Button = ({text, className='', handleClick}) => {
  return (
    <button onClick={handleClick} className={`bg-[#012725] text-white rounded-full cursor-pointer ${className}`}>
        {text}
    </button>
  )
}

export default Button
