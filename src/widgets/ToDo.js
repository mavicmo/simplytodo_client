import React from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { TbTrash } from "react-icons/tb";
import { MdOutlineModeEditOutline } from "react-icons/md";
function ToDo() {
  return (
    <>
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
    </>
  );
}

export default ToDo;
