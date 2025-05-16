import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopup from '../Components/RidePopup'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidepopup from '../Components/ConfirmRidepopup'
import { CaptainDataContext } from '../context/CaptainContext'
import { SocketContext } from '../context/SocketContext'

function CaptainHome() {
  const [ridePopUppanel, setridePopUppanel] = useState(false)
  const [ride, setRide] = useState()
  const [ConfirmRidepopuppanel, setConfirmRidepopuppanel] = useState(false)
  const ridepopuppanelref = useRef(null)
  const confirmridepopupref = useRef(null)
  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const { socket } = React.useContext(SocketContext)
  useEffect(() => {
    // Only proceed if captain and captain._id exist AND socket exists
    if (captain && captain._id && socket) {
      socket.emit("join", { userType: "captain", userId: captain._id })
      
      const updateLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            socket.emit('update-location-captain', {
              userId: captain._id,
              location: {
                ltd: position.coords.latitude,
                lng: position.coords.longitude
              }
            })
          })
        }
      }
  
      const locationInterval = setInterval(updateLocation, 10000)
      updateLocation()
      
      // Clean up interval when component unmounts or captain changes
      return () => clearInterval(locationInterval)
    }
  }, [captain, socket])

  // Set up socket listener only once when component mounts
  useEffect(() => {
    // Only set up listeners if socket exists
    if (socket) {
      const handleNewRide = (data) => {
        console.log(data)
        setRide(data)
        setridePopUppanel(true)
      }
  
      socket.on('new-ride', handleNewRide)
      
      // Clean up listener when component unmounts
      return () => {
        socket.off('new-ride', handleNewRide)
      }
    }
  }, [socket])

  async function confirmride() {
    // Only proceed if ride and captain exist
    if (ride && ride._id && captain && captain._id) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {
          rideId: ride._id,
          captainId: captain._id,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        
        setridePopUppanel(false)
        setConfirmRidepopuppanel(true)
      } catch (error) {
        console.error("Error confirming ride:", error)
      }
    } else {
      console.error("Missing ride or captain data")
    }
  }

  useGSAP(function () {
    if (ridePopUppanel && ridepopuppanelref.current) {
      gsap.to(ridepopuppanelref.current, {
        transform: 'translateY(0)'
      })
    } else if (ridepopuppanelref.current) {
      gsap.to(ridepopuppanelref.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopUppanel])
  
  useGSAP(function () {
    if (ConfirmRidepopuppanel && confirmridepopupref.current) {
      gsap.to(confirmridepopupref.current, {
        transform: 'translateY(0)'
      })
    } else if (confirmridepopupref.current) {
      gsap.to(confirmridepopupref.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ConfirmRidepopuppanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' />
        <Link to={'/'} className='fixed right-2 top-2  h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg ri-logout-box-line"></i>
        </Link>
      </div>
      <div className='h-3/5 '>
        <img className='h-full w-full object-cover' src='https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif' />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridepopuppanelref} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 '>
        <RidePopup
          ride={ride}
          setridePopUppanel={setridePopUppanel}
          setconfirmridepoPuppanel={setConfirmRidepopuppanel}
          confirmRide={confirmride}
        />
      </div>
      <div ref={confirmridepopupref} className='h-screen fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 '>
        <ConfirmRidepopup
          ride={ride}
          setConfirmRidepoPuppanel={setConfirmRidepopuppanel}
          setridePopUppanel={setridePopUppanel}
        />
      </div>
    </div>
  )
}

export default CaptainHome