import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const { assets } = useContext(AppContext);
  return (
    <div className="flex mt-30 bg-indigo-500 h-80 rounded-lg items-center p-12 gap-20 ">
      <div>
        <h1 className="text-white font-bold text-3xl max-w-100 ">
          Book Appointment 
          With 100+ Trusted Doctors
        </h1>
        <button onClick={()=> window.location.href='#speciality'} className='mt-4 p-4 bg-white rounded-full text-sm flex gap-2 text-zinc-600 cursor-pointer hover:scale-105'>Book appointment</button>
      </div>
      <div className="hidden md:block" >
        <img src={assets.appointment_img} alt="" className="w-full relative bottom-4 right-0 max-w-xs"/>
      </div>
    </div>
  );
};

export default Banner;
