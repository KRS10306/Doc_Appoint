import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {
  const { doctors } = useContext(AppContext);

  const { speciality } = useParams();

  const navigate = useNavigate()

  console.log(speciality);
  return (
    // <div>
    //   <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 mt-5'>
    //   { (doctors.speciality==speciality) ?
    //   {doctors.map((doc,index)=>(
    //     (doc.speciality==speciality) ?
    //     <div className='border rounded-lg border-indigo-100 hover:translate-y-[-10px] duration-500' key={index}>
    //       <img src={doc.image} alt="" className='bg-indigo-100'/>
    //                     <h1 className='text-green-500 text-xs p-2 flex gap-1'> <p className='bg-green-500 h-1.5 w-1.5 rounded-full relative top-1'></p> Available</h1>
    //                     <p className='font-semibold rounded-t-lg p-2'>{doc.name}</p>
    //                     <p className='pl-2 pb-2 text-xs'>{doc.speciality}</p>
    //     </div> : <div className='hidden' key={index}></div>
    //     ))} :
    //   <div>
    //     {doctors.map((doc,index)=>(
    //     <div className='border rounded-lg border-indigo-100 hover:translate-y-[-10px] duration-500' key={index}>
    //       <img src={doc.image} alt="" className='bg-indigo-100'/>
    //                     <h1 className='text-green-500 text-xs p-2 flex gap-1'> <p className='bg-green-500 h-1.5 w-1.5 rounded-full relative top-1'></p> Available</h1>
    //                     <p className='font-semibold rounded-t-lg p-2'>{doc.name}</p>
    //                     <p className='pl-2 pb-2 text-xs'>{doc.speciality}</p>
    //     </div>
    //     ))}
    //   }
    //   </div>
    // </div>
    <div className="flex mt-8">
      <div className="flex flex-col">
        <h4 className="text-gray-500 min-w-60">Browse through doctors speciality</h4>
        <ul className="mt-5">
          <li className="border p-2 mr-4 mb-4 text-xs text-gray-600 border-gray-600 rounded-lg hover:bg-indigo-100 cursor-pointer" onClick={()=> navigate("/doctor/General physician")}>General physician</li>
          <li className="border p-2 mr-4 mb-4 text-xs text-gray-600 border-gray-600 rounded-lg hover:bg-indigo-100 cursor-pointer" onClick={()=> navigate("/doctor/Gynecologist")}>Gynecologist</li>
          <li className="border p-2 mr-4 mb-4 text-xs text-gray-600 border-gray-600 rounded-lg hover:bg-indigo-100 cursor-pointer" onClick={()=> navigate("/doctor/Dermatologist")}>Dermatologist</li>
          <li className="border p-2 mr-4 mb-4 text-xs text-gray-600 border-gray-600 rounded-lg hover:bg-indigo-100 cursor-pointer" onClick={()=> navigate("/doctor/Pediatricians")}>Pediatricians</li>
          <li className="border p-2 mr-4 mb-4 text-xs text-gray-600 border-gray-600 rounded-lg hover:bg-indigo-100 cursor-pointer" onClick={()=> navigate("/doctor/Neurologist")}>Neurologist</li>
          <li className="border p-2 mr-4 mb-4 text-xs text-gray-600 border-gray-600 rounded-lg hover:bg-indigo-100 cursor-pointer" onClick={()=> navigate("/doctor/Gastroenterologist")}>Gastroenterologist</li>
        </ul>
      </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-5">
      {(speciality // if a speciality filter is selected …
        ? doctors.filter((d) => d.speciality === speciality) // …show only matching doctors
        : doctors
      ) // otherwise show everyone
        .map((doc, index) => (
          <div
            key={index}
            className="border rounded-lg border-indigo-100 hover:-translate-y-2 duration-500"
            onClick={()=> navigate(`/appointment/${doc._id}`)}
          >
            <img src={doc.image} alt="" className="bg-indigo-100" />

            <div className="text-green-500 text-xs p-2 flex items-center gap-1">
              <span className="bg-green-500 h-1.5 w-1.5 rounded-full" />{" "}
              Available
            </div>

            <p className="font-semibold p-2">{doc.name}</p>
            <p className="pl-2 pb-2 text-xs">{doc.speciality}</p>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Doctor;
