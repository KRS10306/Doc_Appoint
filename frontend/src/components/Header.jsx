import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='bg-indigo-500 h-130 mt-5 rounded-lg flex items-center p-10 pb-0'>
        <div>
        <h1 className='text-white font-bold text-5xl'>Book Appointment <br /> With Trusted Doctors</h1><br />
        <div className='flex gap-5'>
        <img src={assets.group_profiles} className='h-10' alt="" />
         <p className='text-sm text-white'>Simply browse through are list of doctors <br /> and schedule an appointment hassle free</p>
        </div>
        <button onClick={()=> window.location.href='#speciality'} className='mt-4 p-4 bg-white rounded-full text-sm flex gap-2 text-zinc-600 cursor-pointer hover:scale-105'>Book appointment <img src={assets.arrow_icon} alt="" /></button>
        </div>
        <img src={assets.header_img} className='h-full relative hidden lg:block' alt="" />
    </div>
  )
}

export default Header