import React, { useState } from "react";
import {
  RiAccountCircleFill,
  RiLogoutBoxRFill,
  RiAddFill,
} from "react-icons/ri";
import { TbTrash, TbListNumbers } from "react-icons/tb";
import { TfiList } from "react-icons/tfi";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import {
  MdOutlineCheckCircleOutline,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

// URL for the backend
const URL = "http://localhost:3005/";

const HomePage = () => {
  //   const [isMobile, setIsMobile] = useState(false);
  const [toDoList, setToDoList] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ default: { name: "", completed: false } });
  const navigate = useNavigate();

  // get user
  const User = JSON.parse(localStorage.getItem("user"));

  // remove information from localStorage
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  // Submit a ToDo to the backend
  const formToDoSubmit = async (name) => {
    const userId = User._id;
    const payload = {
      userId,
      name,
    };

    try {
      const res = await axios.post(URL + `todo/createtodo`, payload, {
        headers: {
          Authorization: `Bearer ${User.token}`,
          "Content-Type": "application/json",
        },
      });
      setToDoList(res.data.toDoList);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
            Hello, {User.firstName} {User.lastName}!
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
                <RiAddFill
                  className="text-3xl hover:cursor-pointer"
                  onClick={handleSubmit((data) => {
                    formToDoSubmit(data);
                  })}
                />
                {/* <TbTrash className="text-3xl hover:cursor-pointer" /> */}
              </div>
            </form>
          </div>
          {/* End of Name and Input */}
          {/* Start of Filter Buttons */}
          <div className="flex flex-col space-x-0 md:w-full md:flex md:flex-row">
            <div className="border border-slate-600 text-center w-full bg-green-50 rounded-xl hover:bg-green-200 hover:cursor-pointer m-0 p-1 md:p-10 md:w-full md:m-0">
              <div className="flex items-center justify-center space-x-1 text-2xl font-bold">
                <TbListNumbers />
                ToDo
              </div>
            </div>
            <div className="border border-slate-600 text-center w-full bg-green-50 rounded-xl hover:bg-green-200 hover:cursor-pointer m-0 p-1 md:p-10 md:w-full md:m-0">
              <div className="flex items-center justify-center space-x-1 text-2xl font-bold">
                <MdOutlineCheckCircleOutline /> Completed
              </div>
            </div>
            <div className="border border-slate-600 text-center w-full bg-green-50 rounded-xl hover:bg-green-200 hover:cursor-pointer m-0 p-1 md:p-10 md:w-full md:m-0">
              <div className="flex items-center justify-center space-x-1 text-2xl font-bold">
                <TfiList /> All
              </div>
            </div>
          </div>
          {/* End of Filter Buttons */}
          {/* Start of ToDo List */}

          <div className="p-3 w-full flex flex-col items-center ">
            <div className="flex w-full justify-between md:flex md:flex-row md:space-x-1 text-3xl ">
              <div className="flex flex-row w-full items-center space-x-2">
                {" "}
                <IoIosRadioButtonOff className="hover:cursor-pointer" />
                <span className="border border-black bg-white rounded-lg p-3 w-full font-Rubik text-xl hover:bg-green-200 hover:cursor-pointer">
                  Cook lunch{" "}
                </span>
              </div>
              <div className="flex flex-row justify-end items-center">
                <MdOutlineModeEditOutline className="hover:cursor-pointer" />
                <TbTrash className="hover:cursor-pointer" />
              </div>
            </div>
          </div>

          {/* End of ToDo List */}
        </div>
      </div>

      {/* End of Mian Body */}
    </div>
  );
};

export default HomePage;
