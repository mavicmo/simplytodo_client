import React, { useState } from "react";
import axios from "axios";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { TbTrash } from "react-icons/tb";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useForm } from "react-hook-form";

const URL = process.env.SERVER_URL;
function ToDo({ id, userId, name, token, setRenderEffect, complete }) {
  console.log(complete);
  const [isEdit, setIsEdit] = useState(false);
  // const [isComplete, setIsComplete] = useState(complete);
  let isComplete = complete;
  console.log(isComplete);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ default: { name: "", completed: false } });

  // delete todo by ID
  const handleDelete = async () => {
    try {
      const res = await axios.delete(URL + `todo/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setRenderEffect(res.data.newToDoList);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickEdit = () => {
    isEdit ? setIsEdit(false) : setIsEdit(true);
  };

  // edit function
  const handleEdit = async (name) => {
    const payload = {
      userId,
      name,
    };

    try {
      const res = await axios.put(URL + `todo/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setRenderEffect(res.data.toDoList);
      // setIsComplete(res.data.toDo.completed);
      setIsEdit(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const onClickComplete = () => {
    if (isComplete) {
      isComplete = false;
    } else if (!isComplete) {
      isComplete = true;
    }

    handleCompleted(isComplete);
  };
  const handleCompleted = async (completed) => {
    let payload = { completed };

    try {
      const res = await axios.put(URL + `todo/completeAToDo/${id}`, payload);
      console.log(res.data);
      setRenderEffect(res.data.toDo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex w-full justify-between md:flex md:flex-row md:space-x-1 text-3xl ">
        <form
          onSubmit={handleSubmit((data) => {
            handleEdit(data);
          })}
          className="flex flex-row w-full items-center space-x-2"
        >
          {" "}
          {/* on = true and off = false */}
          {isComplete ? (
            <IoIosRadioButtonOn
              className="hover:cursor-pointer"
              onClick={onClickComplete}
            />
          ) : (
            <IoIosRadioButtonOff
              className="hover:cursor-pointer"
              onClick={onClickComplete}
            />
          )}
          {isEdit ? (
            <input
              type="text"
              {...register("name", { required: "Enter a ToDo Task." })}
              className={`border border-red-500 bg-white rounded-lg p-3 w-full font-Rubik text-xl hover:bg-red-50 hover:cursor-pointer`}
              placeholder="Enter your ToDo"
            />
          ) : (
            <span className="border border-black bg-white rounded-lg p-3 w-full font-Rubik text-xl hover:bg-green-200 hover:cursor-pointer">
              {name}
            </span>
          )}
        </form>
        <div className="flex flex-row justify-end items-center">
          <MdOutlineModeEditOutline
            className="hover:cursor-pointer"
            onClick={onClickEdit}
          />
          <TbTrash className="hover:cursor-pointer" onClick={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default ToDo;
