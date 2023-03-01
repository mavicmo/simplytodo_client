import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-teal-50">
        {/* Card Container */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* left side */}
          <div className="md:block m-auto p-12 justify-center font-bold text-6xl text-teal-700 ">
            SimplyToDo.
          </div>
          {/* right side */}
          <div className="p-6 md:p-20">
            {isRegister ? (
              // code for login
              <div>Register</div>
            ) : (
              <>
                {" "}
                {/* Top Content */}
                <h2 className="font-rubik mb-5 text-4xl font-bold">Log In</h2>
                <p className="max-w-sm mb-5 font-sans font-light text-gray-600">
                  Log in to your account with your email and password.
                </p>
                <input
                  type="text"
                  className=" w-full p-3 border m-2 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                  placeholder="Enter your email address"
                />
                <input
                  type="text"
                  className=" w-full p-3 border m-2 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                  placeholder="Enter your password"
                />
                {/* Border */}
                <div className="mt-12 border-b border-b-gray-300"></div>
                {/* Middle content */}
                <div className="flex flex-col justify-between items-center mt-6 space-y-6 md:flex-row md:space-y-0">
                  <button class="w-full md:w-40 flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                    <span>Login</span>
                  </button>
                  <div
                    onClick={() => (isRegister = true)}
                    className=" text-cyan-700"
                  >
                    Create Account
                  </div>
                </div>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
