import React, { useState,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';
function UserLogin() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userData,setUserData] = useState({});
  const {user,setUser} = useContext(UserDataContext);
  const navigate = useNavigate();
  const submithandler = async (e) => {
     e.preventDefault()
     const userData = 
      {
        email:email,
        password:password
       }
    const rensponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,userData);
    console.log(rensponse);
    console.log(rensponse.status);
    if(rensponse.status === 201){
      const data = rensponse.data;
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
     setEmail('')
     setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
     <img
          className="w-16 mb-8 absolute left-5 top-5 z-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
      <form onSubmit={(e) => {
        submithandler(e)
      }} className='m-10'>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input value={email} 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        required type='email' placeholder='sam@gmail.com' />
        <h3 className='text-lg font-medium mb-2'>Enter password</h3>
        <input 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
       className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        required type='password' placeholder='password' /> 
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create a New Account</Link></p>
      </form>
     </div>
     <div>
      <Link to='/captain-login'className='bg-[#10b461] text-white font-semibold mb-3 flex items-center justify-center rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
      Sign In as Captain
      </Link>
     </div>
    </div>
  )
}

export default UserLogin
