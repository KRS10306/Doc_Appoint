import React, { useEffect, useState } from "react";

const BookingSlot = () => {
  // const [bg,setBg] = useState(false)
  const [DocSlots, setDocSlots] = useState([]);
  const [DocTime, setDocTime] = useState([]);
  const [currentClass, setCurrentClass] = useState(true);

  const today = new Date();
  const day = today.getDay();
  let clicked = new Date(today);
  // clicked.setDate(clicked.getDate() + 10);
  // console.log(clicked.getDate());

  const time = today.getHours();
  // console.log(time);

  if (time < 17) {
    clicked.setDate(clicked.getDate() - 1); //Output is previous date
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
          DocDays.push(days[day + i]);
        } else {
          DocDays.push(days[day + i - days.length]);
        }
      }
    } else {
      for (let i = 0; i < days.length; i++) {
        if (days[day + 1 + i]) {
          DocDays.push(days[day + 1 + i]);
        } else {
          DocDays.push(days[day + i - (days.length - 1)]);
        }
      }
    }
    return DocDays;
  };

  const getDocTime = () => {
    let times = [];
    if (today.getHours() >= 9 && today.getHours() < 18) {
      for (let i = today.getHours(); i < 18; i++) {
        times.push(
          <p key={i + 1}>
            {i + 1}:00
          </p>
        );
      }
    }
    return setDocTime(times);
  };

  const getDocTime2 = () => {
    let times = [];
      for (let i = 9; i < 18; i++) {
        times.push(
          <p key={i + 1}>
            {i + 1}:00
          </p>
        );
      }
    return setDocTime(times);
  };

  // console.log(DocTime);

  const [activeIndexTime, setActiveIndexTime] = useState(null);
  const [activeIndexDate, setActiveIndexDate] = useState(null);

  const DocSlotHandler = () =>{
    
  }

  useEffect(() => {
    getDocDays();
    setDocSlots(DocDays);
    // getDocTime();
  }, []);

  // useEffect(()=>{

  // },[])

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-lg font-medium text-gray-700">Booking Slots</p>
      </div>
      <div className="flex flex-wrap gap-5">
        {DocSlots.map((d, i) => {
          clicked.setDate(clicked.getDate() + 1);
          return (
            <h1
              key={i}
              id = {clicked.getDate()}
              onClick={(e)=> {setActiveIndexDate(i); (today.getDate() === parseInt(e.target.id))? getDocTime() : getDocTime2() ; setActiveIndexTime(null)}} 
              className={(i == activeIndexDate)? "border border-blue-400 p-3 text-center min-w-15 py-6 rounded-full bg-blue-600 text-white cursor-pointer" :
                "border border-gray-400 p-3 text-center text-gray-700 min-w-15 py-6 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
                }
            >
              {d} <br />
              {clicked.getDate()}
            </h1>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-3">
        {/* {(today.getHours() >= 10)? (today.getHours() < 17)?  : :} */}
        {/* {DocTime.map((t, i) => (
          <span
            key={i}
            onClick={(e) =>
              i == parseInt(e.target.id)
                ? setCurrentClass(!currentClass)
                : console.log("first")
            }
            onChange={()=> setCurrentClass(!currentClass)}
            className={
              currentClass
                ? "border border-gray-400 p-2 text-center text-gray-700 min-w-15 px-8 rounded-full hover:bg-blue-500 hover:text-white"
                : "border border-blue-400 p-2 min-w-15 text-center px-8 rounded-full bg-blue-500 text-white"
            }
          >
            {t}
          </span>
        ))} */}
        {DocTime.map((t, i) => (
        <span
          key={i}
          onClick={()=> setActiveIndexTime(i)}
          // onClick={(e)=> console.log((e.target.id))}
          className={(activeIndexTime == i)? "border border-blue-400 p-2 text-center min-w-15 px-8 rounded-full bg-blue-600 text-white cursor-pointer":
            "border border-gray-400 p-2 text-center text-gray-700 min-w-15 px-8 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer"
             }
        >
          {t}
        </span>
      ))}
      </div>

      <div>
        <button className="border cursor-pointer p-3 text-center min-w-25 px-15 rounded-full bg-blue-500 text-white text-sm hover:bg-blue-600">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingSlot;
