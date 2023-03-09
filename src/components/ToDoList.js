import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDo from "../widgets/ToDo";

// URL for the backend
const URL = "http://localhost:3005/";

function ToDoList({ token, userId, formToDoSubmit }) {
  const [listOfToDo, setListOfToDo] = useState([]);
  const [renderEffect, setRenderEffect] = useState([]);

  const getListOfToDo = async () => {
    try {
      const res = await axios.get(URL + `todo/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setListOfToDo(res.data.toDoList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListOfToDo();
  }, [formToDoSubmit, renderEffect]);
  return (
    <>
      <div className="p-3 w-full flex flex-col items-center ">
        {listOfToDo.map(({ _id, name }) => (
          <ToDo
            key={_id}
            id={_id}
            userId={userId}
            name={name}
            token={token}
            setListOfToDo={setListOfToDo}
            setRenderEffect={setRenderEffect}
          />
        ))}
      </div>
    </>
  );
}

export default ToDoList;
