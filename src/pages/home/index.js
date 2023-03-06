import React, { useState } from "react";
import {
  RiAccountCircleFill,
  RiLogoutBoxRFill,
  RiAddFill,
} from "react-icons/ri";
import { TbTrash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const HomePage = () => {
  //   const [isMobile, setIsMobile] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ default: { name: "", completed: false } });
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const formToDoSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="Container w-full h-screen bg-teal-50 md:flex md:flex-col md:items-center">
      {/* {isMobile ? }   */}
      {/* NavBar */}
      <div className="flex flex-col space-y-0 bg-white shadow-2xl rounded-2xl  md:flex-row md:w-full md:space-y-0 md:m-0 md:justify-between md:items-center">
        <div className="md:block md:text-left m-auto p-5 font-bold text-6xl text-teal-700 ">
          SimplyToDo.
        </div>
        <div className="flex space-x-1 m-auto p-5 font-bold text-5xl text-teal-700 ">
          <RiAccountCircleFill
            className="hover:cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}
          />
          <RiLogoutBoxRFill
            className="hover:cursor-pointer"
            onClick={() => {
              logout();
            }}
          />
        </div>
      </div>
      {/* End of NavBar */}

      {/* Mian Body */}

      {/* <div className="flex flex-col md:items-center md:flex md:justify-center md:w-full md:p-0 md:m-0"> */}
      <div className="container m-6 p-6">
        {/* Name and Input */}
        <div className="flex flex-col space-y-4 m-6 p-6 md:flex md:flex-col md:m-6 md:p-6 md:items-center md:space-y-4 ">
          {/* name */}
          <div className="text-2xl w-full font-Rubik font-medium">
            Hello, Name!
          </div>
          {/* input */}
          <div className="p-3 w-full">
            <form
              onSubmit={handleSubmit((data) => {
                formToDoSubmit(data);
              })}
            >
              <div className="flex md:flex md:flex-row md:space-x-1">
                <input
                  type="text"
                  {...register("name", { required: "Enter a ToDo Task." })}
                  className={`w-full h-full p-2 border  border-gray-300 rounded-xl h-50 md:w-full`}
                  placeholder="Enter your ToDo"
                />
                <RiAddFill className="text-3xl" />
                <TbTrash className="text-3xl" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* End of Mian Body */}
    </div>
  );
};

export default HomePage;
