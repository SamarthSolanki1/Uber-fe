import React, { use, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';


function UserSignup() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [mobilenum,setmobilenum] = useState('')
  const [ userData, setUserData ] = useState({})
  const navigate = useNavigate();
  const {user,setUser} = React.useContext(UserDataContext);

  //shyam user password is shyam123
  const submithandler = async (e) =>{
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      mobileNumber:mobilenum,
      password:password

    }
    console.log(newUser)
    const rensponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,newUser);
    console.log(rensponse);
    if(rensponse.status === 200){
      const data = rensponse.data;
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setmobilenum('')


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
        <h3 className='text-lg font-medium mb-2'>Enter your Name</h3>
        <div className='flex gap-4 mb-5'>
        <input value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
        className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm'
        required type='name' placeholder='firstname' />
        <input value={lastName}
        onChange={(e) => {
          setLastName(e.target.value)
        }}
        className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm'
        required type='name' placeholder='lastname' />
        </div>
        <h3 className='text-lg font-base mb-2'>Enter your email</h3>
        <input value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
        required type='email' placeholder='sam@gmail.com' />
         <h3 className='text-lg font-base mb-2'>Enter your Mobile Number</h3>
        <input value ={mobilenum}
        onChange={(e)=>{
          setmobilenum(e.target.value)
        }}
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
        required type='number' placeholder='12345678' />
        
        <h3 className='text-base font-medium mb-2'>Enter password</h3>
        <input value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
       className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
        required type='password' placeholder='password' /> 
        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Create Account</button>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </form>
     </div>
     <div>
     <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
     </div>
    </div>
  )
}

export default UserSignup
