import React from 'react'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainDetails = () => {
  const {captain} = useContext(CaptainDataContext)
  console.log(captain)
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='rounded-full object-cover h-10 w-10' src="https://apiwp.thelocal.com/cdn-cgi/image/format=webp,width=1200,quality=75/https://apiwp.thelocal.com/wp-content/uploads/2018/12/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg" alt="" />
          <h4 className='text-lg font-medium capitalize'>{captain?.fullname.firstname + " " + captain?.fullname.lastname}</h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>256</h4>
          <p className='text-sm font-medium text-gray-600'>Total Earned</p>
        </div>
      </div>
      <div className='flex justify-center gap-5 items-start rounded-xl p-3 mt-6 bg-gray-100'>
        <div className='text-center'>
        <i className="text-3xl font-extralight ri-time-line"></i>
        <h5 className='text-lg font-medium'>
          10.5
        </h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'><i className="text-3xl font-extralight ri-speed-up-line">
          </i>
          <h5 className='text-lg font-medium'>
          10.5
        </h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        <div className='text-center'>
        <i className="text-3xl font-extralight ri-booklet-fill"></i>
        <h5 className='text-lg font-medium'>
          10.5
        </h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
      </div>
    </div>
  )
}

export default CaptainDetails
