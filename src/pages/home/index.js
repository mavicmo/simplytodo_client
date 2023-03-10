import ToDoList from "../../components/ToDoList";
import React, { useState, useEffect } from "react";
import {
  RiAccountCircleFill,
  RiLogoutBoxRFill,
  RiAddFill,
} from "react-icons/ri";
import { TbTrash, TbListNumbers } from "react-icons/tb";
import { TfiList } from "react-icons/tfi";

import {
  MdOutlineCheckCircleOutline,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

// URL for the backend
const URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3005";

const HomePage = () => {
  const [isActive, setIsActive] = useState("toDo");
  const [toDo, setToDo] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [all, setAll] = useState(false);

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
      await axios.post(URL + `todo/createtodo`, payload, {
        headers: {
          Authorization: `Bearer ${User.token}`,
          "Content-Type": "application/json",
        },
      });

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Container w-full h-screen bg-teal-50 md:flex md:flex-col md:items-center">
      {/* NavBar */}
      <div className="flex flex-col space-y-0 bg-white shadow-2xl rounded-2xl  md:flex-row md:w-full md:space-y-0 md:m-0 md:justify-between md:items-center">
        <div className="md:block md:text-left m-auto p-5 font-bold text-6xl text-teal-700 ">
          SimplyToDo.
        </div>
        <div className="flex space-x-1 m-auto p-5 font-bold text-5xl text-teal-700 ">
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
      <div className="container m-3 p-3">
        {/* Name and Input */}
        <div className="flex flex-col space-y-4 m-3 p-3 md:flex md:flex-col md:m-6 md:p-6 md:items-center md:space-y-4 ">
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
              </div>
            </form>
          </div>
          {/* End of Name and Input */}
          {/* Start of Filter Buttons */}
          <div className="flex flex-col space-x-0 md:w-full md:flex md:flex-row">
            <div
              className={`border border-slate-600 text-center w-full  rounded-xl hover:bg-green-200 hover:cursor-pointer m-0 p-1 md:p-10 md:w-full md:m-0
              ${toDo ? "bg-green-200" : " bg-green-50"} `}
              onClick={() => {
                setIsActive("toDo");
                setToDo(true);
                setCompleted(false);

                setAll(false);
              }}
            >
              <div className="flex items-center justify-center space-x-1 text-2xl font-bold">
                <TbListNumbers />
                ToDo
              </div>
            </div>
            <div
              className={`border border-slate-600 text-center w-full  rounded-xl hover:bg-green-200 hover:cursor-pointer m-0 p-1 md:p-10 md:w-full md:m-0
              ${completed ? "bg-green-200" : " bg-green-50"} `}
              onClick={() => {
                setIsActive("completed");
                setCompleted(true);
                setToDo(false);
                setAll(false);
              }}
            >
              <div className="flex items-center justify-center space-x-1 text-2xl font-bold">
                <MdOutlineCheckCircleOutline /> Completed
              </div>
            </div>
            <div
              className={`border border-slate-600 text-center w-full  rounded-xl hover:bg-green-200 hover:cursor-pointer m-0 p-1 md:p-10 md:w-full md:m-0
              ${all ? "bg-green-200" : " bg-green-50"} `}
              onClick={() => {
                setIsActive("all");
                setCompleted(false);
                setToDo(false);
                setAll(true);
              }}
            >
              <div className="flex items-center justify-center space-x-1 text-2xl font-bold">
                <TfiList /> All
              </div>
            </div>
          </div>
          {/* End of Filter Buttons */}
          {/* Start of ToDo List */}
          <ToDoList
            token={User.token}
            userId={User._id}
            formToDoSubmit={formToDoSubmit}
            isActive={isActive}
          />
          {/* End of ToDo List */}
        </div>
      </div>

      {/* End of Mian Body */}
    </div>
  );
};

export default HomePage;
