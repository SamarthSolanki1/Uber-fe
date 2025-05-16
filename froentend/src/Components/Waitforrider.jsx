import React from 'react'

const Waitforrider = (props) => {
  return (
    <div>
      <h5 onClick={() => { props.waitingForDriver(false)}} className='p-1 text-center absolute w-[90%]'><i className="text-3xl text-black ri-arrow-down-wide-line"></i></h5>
           <div className='flex items-center justify-between'>
           <img className='h-15 'src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png' />
           <div className='text-right'>
            <h2 className='text-lg font-medium'>{props.ride?.captain.fullname.firstname}</h2>
            <h4 className='text-xl font-semibold -mt-2 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
            <p>
            Maruti Suzuki Wagon r
            </p>
            <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
           </div>
           </div>
        <div className='flex justify-between gap-2 flex-col items-center'>
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

    </div>
  )
}

export default Waitforrider
