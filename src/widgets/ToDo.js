import React from "react";
import axios from "axios";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { TbTrash } from "react-icons/tb";
import { MdOutlineModeEditOutline } from "react-icons/md";

const URL = "http://localhost:3005/";
function ToDo({ id, name, token }) {
  // delete todo by ID
  const handleDelete = async () => {
    try {
      await axios.delete(URL + `todo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(`worked`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex w-full justify-between md:flex md:flex-row md:space-x-1 text-3xl ">
        <div className="flex flex-row w-full items-center space-x-2">
          {" "}
          <IoIosRadioButtonOff className="hover:cursor-pointer" />
          <span className="border border-black bg-white rounded-lg p-3 w-full font-Rubik text-xl hover:bg-green-200 hover:cursor-pointer">
            {name}
          </span>
        </div>
        <div className="flex flex-row justify-end items-center">
          <MdOutlineModeEditOutline className="hover:cursor-pointer" />
          <TbTrash className="hover:cursor-pointer" onClick={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default ToDo;
