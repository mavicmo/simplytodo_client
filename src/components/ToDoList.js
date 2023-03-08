import React, { useEffect } from "react";
import ToDo from "../widgets/ToDo";

function ToDoList({ token, listOfToDo }) {
  console.log(listOfToDo);

  return (
    <>
      <div className="p-3 w-full flex flex-col items-center ">
        {listOfToDo.map(({ _id, name }) => (
          <ToDo key={_id} id={_id} name={name} token={token} />
        ))}
      </div>
    </>
  );
}

export default ToDoList;
