import React, { useState } from "react";
import { RiAccountCircleFill, RiLogoutBoxRFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  //   const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="w-full h-screen bg-teal-50">
      {/* {isMobile ? }   */}
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
        <div className="flex flex-col space-y-4 m-6">
          {/* name */}
          <div>Hello, Name</div>
          {/* input */}
          <div className="flex justify-center space-x-2">
            <div>Input</div>
            <div>Plus</div>
            <div>Trash</div>
          </div>
        </div>
      </div>

      {/* End of Mian Body */}
    </div>
  );
};

export default HomePage;

{
}
