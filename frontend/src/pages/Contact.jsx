import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const {assets} = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='m-0'>
      <h1 className='my-10 text-center text-2xl text-gray-500'>CONTACT <span className='text-black'>US</span></h1>
      <div className='sm:flex justify-center gap-10 mt-20 sm:mr-20'>
        <div>
          <img src={assets.contact_image} alt="" className='max-w-80 sm:max-w-100' />
        </div>
        <div className='flex flex-col gap-8 text-gray-500'>
          <h1 className='text-xl text-gray-600 font-semibold'>OUR OFFICE</h1>
          <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit.</p>
          <p>Tel: +12 5468793 <br /> Email: dummy@gmail.com</p>
          <h1 className='text-xl text-gray-600 font-semibold'>CAREER AT DOC APPOINT</h1>
          <p>Learn more about our team and job openings</p>
          <div className='cursor pointer'>
          <button onClick={()=> navigate('/doctor')} className='text-left border w-fit px-6 py-3 text-xs text-black'>Explore jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact