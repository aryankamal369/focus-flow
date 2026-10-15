import React from 'react'

const Input = ({handleChange, label, type, placeholder}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-xl font-semibold text-green-950'>{label}</label>
      <input type="email" 
      onChange={handleChange}
      type={type}
      className='border border-green-900 text-[#012725] outline-none max-w-[55%] px-3 py-2 rounded-lg'
      placeholder={placeholder} />
    </div>
  )
}

export default Input
