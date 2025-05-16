import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CaptainSignup() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [mobilenum,setmobilenum] = useState('')
  const [ userData, setUserData ] = useState({})
  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')
  const navigate = useNavigate()
  const {captain,setCaptain} = React.useContext(CaptainDataContext);
  const submithandler = async (e) =>{
    e.preventDefault();
   const captainData =  {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      mobileNumber:mobilenum,
      password:password,
      vehicle: {
        color:vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    //ramesh
    const rensponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);
    console.log(rensponse)
    if(rensponse.status === 201){
      const data = rensponse.data;
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setmobilenum('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')


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
        <h3 className='text-lg font-medium mb-2'>What's our Captain Name</h3>
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
        <h3 className='text-lg font-base mb-2'>What's our Captain email</h3>
        <input value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
        required type='email' placeholder='sam@gmail.com' />
         <h3 className='text-lg font-base mb-2'>What's our Captain Mobile Number</h3>
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

<h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Create Account</button>
        <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </form>
     </div>
     <div>
     <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
     </div>
    </div>
  )
}

export default CaptainSignup
