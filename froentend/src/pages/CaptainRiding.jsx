import React, { useRef, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import FinishRide from '../Components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/src'
const CaptainRiding = (props) => {
  const [finishridepanel,setfinishridepanel] = useState(false)
  const Finishridepanelref = useRef(null)
  const location = useLocation()
  const ridedata = location.state?.ride
  console.log(ridedata)
  useGSAP(function () {
    if (finishridepanel) {
        gsap.to(Finishridepanelref.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(Finishridepanelref.current, {
            transform: 'translateY(100%)'
        })
    }
  }, [finishridepanel])
  return (
    <div className='h-screen'>
      {/* Uber Logo and Logout Button */}
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' />
        <Link to={'/home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg ri-logout-box-line"></i>
        </Link>
      </div>

      {/* Map / Image Section */}
      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src='https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif' />
      </div>

      {/* Bottom Blue Box */}
      <div className='h-1/5 p-6 bg-blue-400 flex items-center justify-between relative'>

        {/* Close/Open Icon (Now Centered at the Top of the Blue Box) */}
        <h5 className='absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <i className="text-3xl text-black ri-arrow-down-wide-line"></i>
        </h5>

        {/* Distance Text */}
        <h4 className='text-xl font-semibold'>4 Km away</h4>

        {/* Complete Ride Button (Position Unchanged) */}
        <button onClick={() => {
          setfinishridepanel(true)
        }} className='w-full bg-green-400 text-black font-semibold p-2 rounded-2xl'>
          Complete Ride
        </button>

      </div>
      <div ref={Finishridepanelref}  className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 '>
       <FinishRide 
       ride = {ridedata}
       setfinishridepanel = {setfinishridepanel}/>
      </div>
    </div>
  )
}

export default CaptainRiding
