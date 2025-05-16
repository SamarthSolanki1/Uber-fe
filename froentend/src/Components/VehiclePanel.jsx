import React from 'react'

function VehiclePanel(props) {
  return (
    <div>
      <h5 onClick={() => {props.setVehiclePanel(false)}} className='p-1 text-center absolute w-[90%]'><i className="text-3xl text-black ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose your Ride</h3>
        <div onClick={()=> {
            props.setconfirmRidePanel(true)
            props.selectVehicle('car')
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full item-center justify-center p-3'>
        <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png' />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>Uber Go <span><i className="ri-user-line"></i></span>4</h4>
          <h5 className='font-medium text-sm'>2 mins Away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
        </div>
        <h2 className='font-semibold text-xl'>₹{props.fare.car}</h2>
        </div>
        <div onClick={()=> {
            props.setconfirmRidePanel(true)
            props.selectVehicle('moto')
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full item-center justify-center p-3'>
        <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>Moto <span><i className="ri-user-line"></i></span>1</h4>
          <h5 className='font-medium text-sm'>2 mins Away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
        </div>
        <h2 className='font-semibold text-xl'>₹{props.fare.moto}</h2>
        </div>
        <div onClick={()=> {
            props.setconfirmRidePanel(true)
            props.selectVehicle('auto')
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full item-center justify-center p-3'>
        <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png' />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>AutoRickshaw <span><i className="ri-user-line"></i></span>3</h4>
          <h5 className='font-medium text-sm'>5 mins Away</h5>
          <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
        </div>
        <h2 className='font-semibold text-xl'>₹{props.fare.auto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
