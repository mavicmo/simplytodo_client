import React from "react";
import ToDo from "../widgets/ToDo";

function ToDoList() {
  return (
    <>
      <div className="p-3 w-full flex flex-col items-center ">
        <ToDo />
      </div>
    </>
  );
}

export default ToDoList;
