import React, { useState } from "react";

const Login = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameRegex = /^[a-zA-Z ]{2,40}$/;

  const [userRegisteration, setUserRegisteration] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registrationHandler = async () => {
    if (!nameRegex.test(userRegisteration.name)) {
      alert("Enter a correct name");
      return;
    }
    if (!emailRegex.test(userRegisteration.email)) {
      alert("Enter a correct email");
      return;
    }
    if (!passwordRegex.test(userRegisteration.password)) {
      alert("Enter a correct password");
      return;
    }
    return console.log(userRegisteration);
  };

  const [state, setState] = useState("SignUp");

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-3 mt-20 bg-white p-10 w-100 border rounded-lg border-gray-300 shadow-lg">
        {state === "SignUp" ? (
          <h1 className="font-semibold text-2xl">Create Account</h1>
        ) : (
          <h1 className="font-semibold text-2xl">Login</h1>
        )}
        {state === "SignUp" ? (
          <p className="text-gray-600 font-sm">
            Please sign up to book appointment
          </p>
        ) : (
          <p className="text-gray-600 font-sm">
            Please Login to book appointment
          </p>
        )}
        {state === "SignUp" && (
          <div>
            <p className="text-gray-600 text-sm">Full Name </p>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) =>
                setUserRegisteration({
                  ...userRegisteration,
                  name: e.target.value,
                })
              }
              className="border w-full border-gray-200 rounded-sm p-2 outline-none mt-1"
            />
          </div>
        )}
        <div>
          <p className="text-gray-600 text-sm">Email</p>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setUserRegisteration({
                ...userRegisteration,
                email: e.target.value,
              })
            }
            className="border w-full border-gray-200 rounded-sm p-2 outline-none mt-1"
          />
        </div>
        <div>
          <p className="text-gray-600 text-sm">Password</p>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setUserRegisteration({
                ...userRegisteration,
                password: e.target.value,
              })
            }
            className="border w-full border-gray-200 rounded-sm p-2 outline-none mt-1"
          />
        </div>
        {state === "SignUp" ? (
          <button
            className="bg-blue-500 text-white py-2 my-2 rounded-md cursor-pointer"
            onClick={registrationHandler}
          >
            Create account
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white py-2 my-2 rounded-md cursor-pointer"
            onClick={registrationHandler}
          >
            Login
          </button>
        )}
        {state === "SignUp" ? (
          <p>
            Already have a account?{" "}
            <a
              className="text-indigo-500 underline cursor-pointer"
              onClick={() =>
                setState("")}
            >
              Login Here
            </a>
          </p>
        ) : (
          <p>
            Create a new account{" "}
            <a className="text-indigo-500 underline cursor-pointer" onClick={() =>
                setState("SignUp")}>
              Sign Up
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
