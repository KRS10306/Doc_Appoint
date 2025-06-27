import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Contact from './pages/Contact'
import Login from './pages/Login'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' sm:mx-[10%] font-sans'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctor/:speciality' element={<Doctor />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment/:doc' element={<Appointment />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App