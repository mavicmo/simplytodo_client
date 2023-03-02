import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3005/";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const formRegisterSubmit = async (data) => {
    const response = await axios.post(URL + `users/register`);
  };

  const formLoginSubmit = (data) => {
    console.log(data);
  };

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
              <>
                {" "}
                {/* Top Content */}
                <h2 className="font-rubik mb-5 text-4xl font-bold">Register</h2>
                <p className="max-w-sm mb-5 font-sans font-light text-gray-600">
                  Create your account with your name, email, and password.
                </p>
                {/* first name and last name */}
                <form
                  onSubmit={handleSubmit((data) => {
                    formRegisterSubmit(data);
                  })}
                >
                  <div className="flex flex-col justify-between md:flex-row md:justify-between">
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "First Name is required.",
                      })}
                      className={`w-full p-3 border m-2 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light ${
                        errors.firstName
                          ? `border-red-500 placeholder-red-500`
                          : null
                      }`}
                      placeholder={
                        errors.firstName
                          ? `${errors.firstName?.message}`
                          : `Enter your first name`
                      }
                    />
                    {/* <p>{errors.firstName?.message}</p> */}
                    <input
                      {...register("lastName", {
                        required: "Last Name is required.",
                      })}
                      type="text"
                      className={`w-full p-3 border m-2 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light ${
                        errors.lastName
                          ? `border-red-500 placeholder-red-500`
                          : null
                      }`}
                      placeholder={
                        errors.lastName
                          ? `${errors.lastName?.message}`
                          : `Enter your last name`
                      }
                    />
                  </div>
                  {/* Email */}
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: /^\S+@\S+$/i,
                    })}
                    className={`w-full p-3 border m-2 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light ${
                      errors.email ? `border-red-500 placeholder-red-500` : null
                    }`}
                    placeholder={
                      errors.email
                        ? `${errors.email?.message}`
                        : `Enter your email address`
                    }
                  />
                  {/* Password */}
                  <input
                    type="password"
                    {...register("password", {
                      required:
                        "Password is required and minimum length at least 4.",
                      minLength: {
                        value: 4,
                        message: "Minimum length of atleast 4 characters.",
                      },
                    })}
                    className={`w-full p-3 border m-2 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light ${
                      errors.password
                        ? `border-red-500 placeholder-red-500`
                        : null
                    }`}
                    placeholder={
                      errors.password
                        ? `${errors.password?.message}`
                        : `Enter your password name`
                    }
                  />
                  <p className="text-red-500 font-bold ml-2">
                    {errors.password?.message}
                  </p>
                  {/* Border */}
                  <div className="mt-12 border-b border-b-gray-300"></div>
                  {/* bottom content */}
                  <div className="flex flex-col justify-between items-center mt-6 space-y-6 md:flex-row md:space-y-0">
                    <button class="w-full md:w-40 flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                      <span>Register</span>
                    </button>

                    <div
                      onClick={() => setIsRegister(false)}
                      className=" text-cyan-700 hover:cursor-pointer"
                    >
                      Login to your account
                    </div>
                  </div>{" "}
                </form>
              </>
            ) : (
              <>
                {" "}
                {/* Top Content */}
                <h2 className="font-rubik mb-5 text-4xl font-bold">Log In</h2>
                <p className="max-w-sm mb-5 font-sans font-light text-gray-600">
                  Log in to your account with your email and password.
                </p>
                {/* Email */}
                <form
                  onSubmit={handleSubmit((data) => {
                    formLoginSubmit(data);
                  })}
                >
                  <input
                    type="email"
                    // value={email}
                    {...register("email", {
                      required: "Email is required.",
                      pattern: /^\S+@\S+$/i,
                    })}
                    className={`w-full p-3 border m-2 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light ${
                      errors.email ? `border-red-500 placeholder-red-500` : null
                    }`}
                    placeholder={
                      errors.email
                        ? `${errors.email?.message}`
                        : `Enter your email address`
                    }
                  />
                  {/* Password */}
                  <input
                    type="password"
                    // value={password}
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 4,
                        message: "Minimum length at least 4.",
                      },
                    })}
                    className={`w-full p-3 border m-2 border-gray-300 rounded-md placeholder:font-sans placeholder:font-light ${
                      errors.password
                        ? `border-red-500 placeholder-red-500`
                        : null
                    }`}
                    placeholder={
                      errors.password
                        ? `${errors.password?.message}`
                        : `Enter your password name`
                    }
                  />
                  {/* Border */}
                  <div className="mt-12 border-b border-b-gray-300"></div>
                  {/* Middle content */}
                  <div className="flex flex-col justify-between items-center mt-6 space-y-6 md:flex-row md:space-y-0">
                    <button class="w-full md:w-40 flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                      <span>Login</span>
                    </button>
                    <div
                      onClick={() => setIsRegister(true)}
                      className=" text-cyan-700 hover:cursor-pointer"
                    >
                      Create Account
                    </div>
                  </div>{" "}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
