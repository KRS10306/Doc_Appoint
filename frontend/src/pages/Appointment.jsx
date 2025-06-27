import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import BookingSlot from "../components/BookingSlot";

const Appointment = () => {
  const { doctors } = useContext(AppContext);

  const { doc } = useParams();
  console.log(doc);

  return (
    <div>
      {(doc ? doctors.filter((d) => d._id === doc) : doctors).map(
        (doc, index) => (
          <div key={index}>
          <div className="flex mt-10 gap-10">
            <div className="bg-indigo-500 min-w-60 rounded-lg relative flex justify-center">
              <img
                src={doc.image}
                className="absolute bottom-0 min-w-75"
                alt=""
              />
            </div>
            <div>
              <div className="border rounded-xl px-10 py-8 flex flex-col gap-5 pr-40">
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
          <div className="flex justify-end mt-10">
            <BookingSlot/>
          </div>
          </div>
        )
      )}
    </div>
  );
};

export default Appointment;
