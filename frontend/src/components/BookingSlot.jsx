import React, { useEffect, useState } from "react";

const BookingSlot = () => {
  // const [bg,setBg] = useState(false)
  const [DocSlots, setDocSlots] = useState([]);

  const today = new Date();
  const day = today.getDay();
  let tomorrow = new Date(today);
  // tomorrow.setDate(tomorrow.getDate() + 10);
  // console.log(tomorrow.getDate());

  const time = today.getHours();
  console.log(time);

    if (time < 17) {
        tomorrow.setDate(tomorrow.getDate() - 1); //Output is previous date
    }

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayNow = days[day];
  // console.log(dayNow)
  // console.log(today.getDate())
  let DocDays = [];

  const getDocDays = () => {
    if (time < 17) {
      for (let i = 0; i < days.length; i++) {
        if (days[day + i]) {
          DocDays = [...DocDays, days[day + i]];
        } else {
          DocDays = [...DocDays, days[day + i - days.length]];
        }
      }
    } else {
        for (let i = 0; i < days.length; i++) {
        if (days[day + 1 + i]) {
          DocDays = [...DocDays, days[day + 1 + i]];
        } else {
          DocDays = [...DocDays, days[day + i - (days.length - 1)]];
        }
      }
    }
    return DocDays;
  };

  useEffect(() => {
    getDocDays();
    setDocSlots(DocDays);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-lg font-medium text-gray-700">Booking Slots</p>
      </div>
      <div className="flex gap-5">
        {DocSlots.map((d, i) => {
          tomorrow.setDate(tomorrow.getDate() + 1);
          return (
            <h1
              key={i}
              className="border border-gray-400 p-3 text-center text-gray-700 min-w-15 py-6 rounded-full hover:bg-blue-500 hover:text-white"
            >
              {d} <br />
              {tomorrow.getDate()}
            </h1>
          );
        })}
      </div>
      <div className="flex gap-3">
        {/* {(today.getDate() === tomorrow.getDate())? (time) :} */}
      </div>

      <div>
        <button className="border cursor-pointer p-3 text-center min-w-25 px-15 rounded-full bg-blue-500 text-white text-sm">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingSlot;
