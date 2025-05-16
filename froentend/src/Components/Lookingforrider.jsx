import React from 'react'

const Lookingforrider = (props) => {
  return (
    <div>
      <h5 onClick={() => {props.setvehiclefound(false)}} className='p-1 text-center absolute w-[90%]'><i className="text-3xl text-black ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>
        <div className='flex justify-between gap-2 flex-col items-center'>
      <img className='h-20 'src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png' />
      </div>
      <div className='w-full mt-5'>
           <div className='flex items-center gap-5 p-3 border-b-2'><i className="text-lg ri-map-pin-2-fill"></i> 
           <div>
            <h3 className='text-lg font-medium'>562/11a</h3>
            <p className='text-base -mt-1 text-black-600'>{props.pickup}</p>
           </div>
           </div>
           <div className='flex items-center gap-5 p-3 border-b-2'>
           <i className="text-lg ri-map-pin-2-fill"></i> 
           <div>
            <h3 className='text-lg font-medium'>562/11a</h3>
            <p className='text-base -mt-1 text-grey-600'>{props.destination}</p>
           </div>
           </div>
           <div className='flex items-center gap-5 p-3'><i className="ri-money-rupee-circle-line"></i>
           <div>
            <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
            <p className='text-base -mt-1 text-black-200'>Cash</p>
           </div></div>
      </div>

    </div>
  )
}

export default Lookingforrider
