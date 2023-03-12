import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDo from "../widgets/ToDo";

// URL for the backend
const URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3005";

function ToDoList({ token, userId, formToDoSubmit, isActive }) {
  const [listOfToDo, setListOfToDo] = useState([]);
  const [renderEffect, setRenderEffect] = useState([]);

  let route = "";
  if (isActive == "toDo") {
    route = "/notCompleteListOfToDo";
  } else if (isActive == "completed") {
    route = "/getAllCompletedToDos";
  } else if (isActive == "all") {
    route = "/";
  }
  const getListOfToDo = async () => {
    try {
      const res = await axios.get(URL + `todo${route}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setListOfToDo(res.data.toDoList);
      console.log(res.data.toDoList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListOfToDo();
  }, [formToDoSubmit, renderEffect, isActive]);
  return (
    <>
      <div className="p-3 w-full flex flex-col items-center ">
        {listOfToDo.map(({ _id, name, completed }) => (
          <ToDo
            key={_id}
            id={_id}
            userId={userId}
            name={name}
            token={token}
            setListOfToDo={setListOfToDo}
            setRenderEffect={setRenderEffect}
            complete={completed}
          />
        ))}
      </div>
    </>
  );
}

export default ToDoList;
