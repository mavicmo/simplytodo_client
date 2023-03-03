import React, { useState } from "react";
import { RiAccountCircleFill, RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="w-full h-screen bg-teal-50">
      {/* NavBar */}
      <div className="flex flex-col space-y-0 bg-white shadow-2xl rounded-2xl  md:flex-row md:space-y-0 md:m-0 md:justify-between md:items-center">
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

      <div className="flex flex-col">
        {/* Name and Input */}
        <div className="">
          {/* name */}
          <div>Hello, Name</div>
          {/* input */}
          <div>asdf</div>
        </div>
      </div>

      {/* End of Mian Body */}
    </div>
  );
};

export default HomePage;

{
}
