import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Start from '../src/pages/Start'
import CaptainLogin from '../src/pages/CaptainLogin'
import CaptainSignup from '../src/pages/CaptainSignup'
import UserLogin from '../src/pages/UserLogin'
import UserSignup from '../src/pages/UserSignup'
import Home from './pages/Home'
import UserLogout from '../src/pages/UserLogout'
import UserProtectedWrraper from './pages/UserProtectedWrraper'
import CaptainHome from './pages/CaptainHome'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element= {<Start/>} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/home' element={<UserProtectedWrraper>
          <Home/>
        </UserProtectedWrraper>} />
        <Route path='/captain-home' element = {<CaptainHome/>} />
        <Route path='/CaptainRiding' element = {<CaptainRiding />} />
        <Route path='/user/logout' element={<UserProtectedWrraper>
          <UserLogout />
        </UserProtectedWrraper>} />
      </Routes>
    </div>
  )
}

export default App
