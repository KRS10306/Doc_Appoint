import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className="mt-20 flex flex-col items-center gap-5" id="speciality">
      <h1 className="text-3xl font-semibold">Find by Speciality</h1>
      <div className="sm:w-1/3 text-center text-sm text-gray-500">
      {/* "sm:"--> targets screens that are 640px or wider */}
        <p>Simply browse through are list of doctors and schedule</p>
        <p>your appointment hassle free</p>
      </div>
      <div className="sm:flex gap-5 text-zinc-600">
        {specialityData.map((item,index)=>(
            <Link onClick={()=> scrollTo(0,0)} key={index} to={`/doctor/${item.speciality}`} className="flex flex-col items-center hover:translate-y-[-10px] duration-500">
          <img className="w-20" src={item.image} alt="" />
          <p>{item.speciality}</p>
        </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
