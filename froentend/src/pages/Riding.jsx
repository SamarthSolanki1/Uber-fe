import React, { useEffect, useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for the 'ride-ended' event
    const handleRideEnded = () => {
      console.log("🚗 Ride ended event received, navigating to home...");
      navigate('/home');
    };

    if (socket) {
      socket.on('ride-ended', handleRideEnded);
    }

    // Cleanup function to remove event listener on unmount
    return () => {
      if (socket) {
        socket.off('ride-ended', handleRideEnded);
      }
    };
  }, [socket, navigate]); // Runs when `socket` or `navigate` changes

  return (
    <div className='h-screen'>
      <Link to={'/home'} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg ri-home-2-fill"></i>
      </Link>

      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src='https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif' />
      </div>

      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
          <img className='h-15' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png' />
          <div>
            <h2 className='text-lg font-medium'>{ride?.captain?.fullname?.firstname}</h2>
            <h4 className='text-xl font-semibold -mt-2 -mb-1'>{ride?.captain?.vehicle?.plate}</h4>
            <p>Maruti Suzuki Wagon R</p>
          </div>
        </div>

        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11a</h3>
              <p className='text-base -mt-1 text-grey-600'>{ride?.destination}</p>
            </div>
          </div>

          <div className='flex items-center gap-5 p-3'>
            <i className="ri-money-rupee-circle-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
              <p className='text-base -mt-1 text-black-200'>Cash</p>
            </div>
          </div>
        </div>

        <button className='w-full mt-full bg-green-400 font-semibold p-2 rounded-lgme rounded-2xl'>
          Make Your Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
