import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {assets} from '../assets/assets_frontend/assets'

const Navbar = () => {
  const navigate = useNavigate();

  const [showCreate, setShowCreate] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className=" hidden sm:block">
      <div className="flex justify-between mt-2 items-center">
        <span className="text-2xl font-medium ">Doc Appoint</span>
        <div className="flex justify-between w-sm text-sm">
          <NavLink to="/">
            <span>HOME</span>
            <hr className="hidden h-0.5 bg-blue-400" />
          </NavLink>
          <NavLink to="/doctor">
            <span>DOCTORS</span>
            <hr className="hidden h-0.5 bg-blue-400" />
          </NavLink>
          <NavLink to="/about">
            <span>ABOUT</span>
            <hr className="hidden h-0.5 bg-blue-400" />
          </NavLink>
          <NavLink to="/contact">
            <span>CONTACT</span>
            <hr className="hidden h-0.5 bg-blue-400" />
          </NavLink>
        </div>
        <div>
          {
            token ? <div className="cursor-pointer flex items-center gap-2 group relative"> {/* group and relative is for dropdown */} 
              <img src={assets.profile_pic} className="w-13 rounded-full" alt="" />
              <img src={assets.dropdown_icon} className="w-3" alt="" />
              <div className="absolute pt-14.5 top-0 right-0 text-base font-sm hidden group-hover:block">
                <div className="min-w-45 bg-stone-100 rounded p-4 flex flex-col gap-4 text-zinc-600">
              <p onClick={()=> navigate('/my-profile')} className="hover:text-black">My Profile</p>
              <p onClick={()=> navigate('/my-appointments')} className="hover:text-black">My Appointments</p>
              <p onClick={()=> setToken(false)} className="hover:text-black">Logout</p>
              </div>
            </div>
            </div>
             : <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white p-3.5 rounded-full px-5 text-sm cursor-pointer"
          >
            Create Account
          </button>
          }
          
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Navbar;
