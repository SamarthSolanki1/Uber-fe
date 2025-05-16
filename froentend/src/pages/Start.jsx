import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="h-screen flex flex-col bg-[#f4e1df]">
      {/* Top Section with Logo */}
      <div className="bg-cover relative flex-grow">
        <img
          className="w-16 absolute left-5 top-5 z-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />

        {/* Updated Image - Covers the top section better */}
        <img
          className="bg-cover bg-center w-full h-full object-cover"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_800,w_800/v1684855112/assets/96/4dd3d1-94e7-481e-b28c-08d59353b9e0/original/earner-illustra.png"
          alt="Uber Traffic Light"
        />
      </div>

      {/* Bottom Text Section */}
      <div className="bg-white p-6 text-center shadow-lg rounded-t-3xl">
        <h2 className="text-[40px] font-semibold">Get started with Uber</h2>
        <Link to='/login' className="mt-4 w-full bg-black text-white py-3 rounded-lg flex justify-center items-center text-lg">
          Continue <span className="ml-2">➡️</span>
        </Link>
      </div>
    </div>
  );
}

export default Start;
