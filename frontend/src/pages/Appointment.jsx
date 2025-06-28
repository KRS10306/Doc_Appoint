import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import BookingSlot from "../components/BookingSlot";

const Appointment = () => {
  const { doctors } = useContext(AppContext);

  const { doc } = useParams();
  // console.log(doc);
  const navigate = useNavigate()

  let x = doctors.filter((d) => d._id === doc);
  let y;

  x.map((d, i) => {
    y = d.speciality;
  });

  let z = doctors.filter((d) => d.speciality === y && d._id !== doc);

  return (
    <div>
      {(doc ? doctors.filter((d) => d._id === doc) : doctors).map(
        (doc, index) => (
          <div key={index}>
            <div className="flex mt-10 gap-10">
              <div className="bg-indigo-500 min-w-80 rounded-lg relative flex justify-center hidden sm:block">
                <img
                  src={doc.image}
                  className="absolute bottom-0 min-w-75"
                  alt=""
                />
              </div>
              <div>
                <div className="border rounded-xl px-5 sm:px-10 py-8 flex flex-col gap-5 lg:pr-40">
                  <div>
                    <h1 className="text-3xl font-medium text-gray-700">
                      {doc.name}
                    </h1>
                    <h3 className="mt-1 text-gray-600">
                      {doc.degree} - <span>{doc.speciality}</span>{" "}
                      <span className="border px-2 py-1 rounded-full text-xs ml-1">
                        {doc.experience}
                      </span>
                    </h3>
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      About <span className="font-bold">ⓘ</span>
                    </p>
                    <p className="text-sm text-gray-600">{doc.about}</p>
                  </div>
                  <div>
                    <h5 className="text-lg text-gray-500">
                      Apointment Fee:{" "}
                      <span className="text-black">${doc.fees}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-10">
              <BookingSlot />
            </div>
            <div className="flex flex-col gap-3 mt-2 items-center content-center self-center-safe">
              <h1 className="text-center font-medium text-4xl">Related Doctors</h1>
              <p className="text-center text-gray-700">Simply browse through our extensive lists of trusted doctors</p>
              <div className="flex mt-5 gap-10">
                {/* grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 */}
                {z
                  .map((doc, i) => (
                    <div
                      key={i}
                      className="border rounded-lg border-indigo-100 hover:-translate-y-2 duration-500 max-w-60"
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
          </div>
        )
      )}
    </div>
  );
};

export default Appointment;
