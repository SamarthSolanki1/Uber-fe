import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FinishRide = (props) => {
  const navigate = useNavigate()
  const endride = async () => {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

      rideId: props.ride._id


  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })

  if (response.status === 200) {
      navigate('/captain-home')
  }
  }
  return (
    <div>
    <h5 onClick={() => {props.setfinishridepanel(false)}} className='p-1 text-center absolute w-[90%]'><i className="text-3xl text-black ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>End this Ride</h3>
      <div className='flex items-center justify-between mt-3 p-4 border-0 rounded-lg bg-gray-100'>
        <div className='gap-3 flex items-center '>
            <img className='h-12 w-12 rounded-full object-cover ' src='data:image/jpeg;base64,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' />
          <h2 className='text-xl font-medium'>{props.ride?.user.fullname.firstname}</h2>
        </div>
        <h5 className='text-lf font-semibold'>2.2 km</h5>
      </div>
      <div className='w-full mt-5'>
           <div className='flex items-center gap-5 p-3 border-b-2'><i className="text-lg ri-map-pin-2-fill"></i> 
           <div>
            <h3 className='text-lg font-medium'>562/11a</h3>
            <p className='text-base -mt-1 text-black-600'>{props.ride?.pickup}</p>
           </div>
           </div>
           <div className='flex items-center gap-5 p-3 border-b-2'>
           <i className="text-lg ri-map-pin-2-fill"></i> 
           <div>
            <h3 className='text-lg font-medium'>562/11a</h3>
            <p className='text-base -mt-1 text-grey-600'>{props.ride?.destination}</p>
           </div>
           </div>
           <div className='flex items-center gap-5 p-3'><i className="ri-money-rupee-circle-line"></i>
           <div>
            <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
            <p className='text-base -mt-1 text-black-200'>Cash</p>
           </div></div>
      </div>
     
      <div className='mt-8 w-full'>  
      <button onClick={endride } className='w-full mt-full flex justify-center bg-green-400 text-black  font-semibold p-2 rounded-lgme rounded-1xl'>Finish Ride</button>
    <p className='text-red-400 bg-gray-100 mt-3 text-sm'>Click on finish button if you have completed the Payment</p>
   </div>
    </div>
  )
}

export default FinishRide
