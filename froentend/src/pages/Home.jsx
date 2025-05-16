import React, { useEffect } from 'react'
import { useState,useRef,useContext } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'
import LocationPanel from '../Components/LocationPanel';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmedRide from '../Components/ConfirmedRide';
import Lookingforrider from '../Components/Lookingforrider';
import Waitforrider from '../Components/Waitforrider';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import LiveTracking from '../Components/LiveTracking';



function Home() {
  //integrating live tracking remaining 
  const [ pickup, setPickup ] = useState('')
    const [ destination, setDestination ] = useState('')
    const [ panelOpen, setPanelOpen ] = useState(false)
    const [vehiclepanel,setVehiclePanel] = useState(false)
    const [confirmRidePanel,setconfirmRidePanel] = useState(false)
    const [vehiclefound,setvehiclefound] = useState(false)
    const [waitingforrider,setwaitingforrider] = useState(false)
    const [ activeField, setActiveField ] = useState(null)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ fare, setFare ] = useState({})
    const [ ride, setRide ] = useState(null)
    const [ vehicleType, setVehicleType ] = useState('')
    const vehiclepanelref = useRef(null);
    const ConfirmRidepanelref = useRef(null);
    const vehicleFoundref = useRef(null);
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const waitingforRiderRef = useRef(null)
    const {user,setUser} = useContext(UserDataContext);
   const {socket} = useContext(SocketContext)

  const submithandler = (e) => {
      e.preventDefault();

  }
  const navigate = useNavigate()
  useEffect(() => {
    socket.emit("join",{userType: "user" , userId: user._id  })
  },[user])
  socket.on('ride-confirmed',ride=>{
    setwaitingforrider(true)
    setvehiclefound(false)
    setRide(ride)
  })
  useEffect(() => {
    if (socket) {
        console.log("✅ User connected to socket with ID:", socket.id);
        socket.emit("join", { userType: "user", userId: user._id });

        socket.on('ride-started', (ride) => {
            console.log("🚀 Ride started event received:", ride);
            setwaitingforrider(false);
            navigate('/riding', { state: { ride } });
        });

        return () => {
            socket.off('ride-started'); // Clean up
        };
    }
}, [socket, user]);
  useGSAP(function () {
    if (panelOpen) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24 
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
            // opacity:0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
}, [ panelOpen ])
useGSAP(function () {
  if (vehiclepanel) {
      gsap.to(vehiclepanelref.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(vehiclepanelref.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ vehiclepanel ])
useGSAP(function () {
  if (confirmRidePanel) {
      gsap.to(ConfirmRidepanelref.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(ConfirmRidepanelref.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ confirmRidePanel ])
useGSAP(function () {
  if (vehiclefound) {
      gsap.to(vehicleFoundref.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(vehicleFoundref.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ vehiclefound])
useGSAP(function () {
  if (waitingforrider) {
      gsap.to(waitingforRiderRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(waitingforRiderRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ waitingforrider])
async function findTrip() {
  setVehiclePanel(true)
  setPanelOpen(false)

  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
  console.log(response)
  setFare(response.data)
}
const handlePickupChange = async (e) => {
  setPickup(e.target.value)
  try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/suggestions`, {
          params: { input: e.target.value },
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }

      })
      //console.log(response)
      setPickupSuggestions(response.data)
  } catch {
      // handle error
  }
}
const handleDestinationChange = async (e) => {
  setDestination(e.target.value)
  try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/suggestions`, {
          params: { input: e.target.value },
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      setDestinationSuggestions(response.data)
  } catch {
      // handle error
  }
}
async function createride(){
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
    pickup,
    destination,
    vehicleType
}, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})
console.log(response)

}
  return (
    
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover'  src='https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif'/>
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }}
          className='absolute right-6 opacity-0 text-2xl top-6'>
          <i className='ri-arrow-down-wide-line'></i>
          </h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e) => {
          submithandler(e)
        }}>
          <div className='line absolute h-16 w-1 top-[36%] left-10 bg-gray-900 rounded-full'></div>
          <input 
          onClick={() => {
            setPanelOpen(true)
            setActiveField('pickup')
          }}
          value={pickup}
          onChange={handlePickupChange}
          className='bg-[#eee] px-8 py-2 rounded-lg text-base w-full mt-3' type='text' placeholder='Add a pickup location' />
          <input 
          onClick={() => {
            setPanelOpen(true)
            setActiveField('destination')
          }}
          value={destination}
          onChange={handleDestinationChange}
          className='bg-[#eee] px-8 py-2 rounded-lg text-base w-full mt-3'type='text' placeholder='Enter your Destination' />
        </form>
        <button
                        onClick={findTrip}
                        className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                        Find Trip
                    </button>
        </div>
        <div ref={panelRef}className=' bg-white h-0 '>
          <LocationPanel  suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}/>

        </div>
      </div>
      <div ref={vehiclepanelref} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
       <VehiclePanel 
      selectVehicle = {setVehicleType}
       fare={fare} setconfirmRidePanel={setconfirmRidePanel} setVehiclePanel = {setVehiclePanel} setvehiclefound = {setvehiclefound}/>
      </div>
      <div ref={ConfirmRidepanelref} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
       <ConfirmedRide 
       pickup = {pickup}
       destination = {destination}
       vehicleType = {vehicleType}
       fare = {fare}
       createride = {createride}
       setconfirmRidePanel={setconfirmRidePanel} setvehiclefound = {setvehiclefound} setVehiclePanel = {setVehiclePanel}/>
      </div>
      <div ref={vehicleFoundref} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
       <Lookingforrider 
        pickup = {pickup}
        destination = {destination}
        vehicleType = {vehicleType}
        fare = {fare}
        createride = {createride}
       setvehiclefound = {setvehiclefound}/>
      </div>
      <div ref = {waitingforRiderRef}  className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full'>
       <Waitforrider ride={ride}
                    setVehicleFound={setvehiclefound}
                    setWaitingForDriver={setwaitingforrider}
                    waitingForDriver={setwaitingforrider} />
      </div>
    </div>
  )
}

export default Home
