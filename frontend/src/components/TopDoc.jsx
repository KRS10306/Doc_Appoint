import React, { useContext } from 'react'
// import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const TopDoc = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)

  return (
    <div className='mt-20'>
        <h1 className='text-center font-semibold text-3xl'>Top Doctors to Book</h1>
        <p className='text-center m-2 mb-8 text-xs text-zinc-600'>Simply browse through our extensive list of trusted doctors</p>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4'>
        {
            (doctors.slice(0,10).map((items,index)=>(
                    <div onClick={()=> navigate(`/appointment/:${items._id}`)} className='border rounded-lg border-indigo-100 hover:translate-y-[-10px] duration-500' key={index}>
                        <img src={items.image} alt="" className='bg-indigo-100'/>
                        <h1 className='text-green-500 text-xs p-2 flex gap-1'> <p className='bg-green-500 h-1.5 w-1.5 rounded-full relative top-1'></p> Available</h1>
                        <p className='font-semibold rounded-t-lg p-2'>{items.name}</p>
                        <p className='pl-2 pb-2 text-xs'>{items.speciality}</p>
                    </div>
            )))
        }
        </div>
        <div className='w-full flex justify-center'>
        {(doctors.length <= 10)? <></> : <button onClick={()=> {navigate("/doctor"); scroll(0,0)}} className='text-black bg-gray-200 rounded-full p-2 px-20 mt-10 cursor-pointer'>more</button>}
        </div>
    </div>
  )
}

export default TopDoc