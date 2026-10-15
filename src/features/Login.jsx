import React, { useContext, useState } from 'react'
import img from '../assets/loginPageImg.png'
import logo from '../assets/logoWhite.png'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const Login = () => {

  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e)=>{
    // console.log(e.target.value);
    const {name, value} = e.target;
    setData({...data, [name]:value})
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(e);
    setUser(data)
    navigate('/landingpage');
  }


  return (
    <div className='h-screen w-full flex bg-[#F7F3EA]'>
      {/* Left Image */}
      <div className=' h-full w-[40%] shadow-lg relative'>
        <img src={img} alt="" className='h-full w-full object-cover' />

        <div className='absolute top-0 left-0 px-6 py-3'>
            <img src={logo} alt="" className='h-15 w-45' />

            <h2 className='text-white text-5xl font-semibold w-[60%] mt-15 ml-10'>Small steps every day lead to big results.</h2>
        </div>
      </div>

      {/* Right Login form */}
      <form className='flex-2 flex flex-col gap-4 p-20'>
        <h1 className='text-4xl font-bold'>Welcome Back</h1>
        <p className='font-semibold text-lg text-green-950'>Login to continue your productivity journey</p>

        <Input handleChange={handleInput} name={'email'} label={'Email Address'} type={'email'} placeholder={'you@gmail.com'} />

        <Input handleChange={handleInput} name={'password'} label={'Password'} type={'password'} placeholder={'Enter your password'} />

        <Button type='submit' handleClick={handleSubmit} text={'Login'} className='max-w-[55%] py-2' />
      
        <p>or continue with</p>

        <div>
          <div>
            
          </div>
        </div>
      </form>


    </div>
  )
}

export default Login
