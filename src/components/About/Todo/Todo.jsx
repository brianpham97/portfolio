import React from "react";
import { todo_data } from "./todo-data";

const Todo = () => {
  const todoData = todo_data.map((todo, i) => {
    return (
      <div
        key={todo.name}
        className={`w-full flex flex-col my-20 ${i === 0 && "mb-10"} ${
          i === todo_data.length - 1 && "pb-20 mb-0"
        } sm:flex-row`}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .3),rgba(0, 0, 0, .3)), url(${todo.image})`,
          }}
          className={`h-80 sm:w-1/2 flex flex-col justify-end items-center bg-cover bg-center bg-no-repeat border-t-[1px]
          ${todo.name === "South Korea" && "border-white"}
          ${todo.name === "Japan" && "border-pink-500"}
          shadow-md
          ${todo.name === "South Korea" && "shadow-white"}
          ${todo.name === "Japan" && "shadow-pink-500"}
          sm:h-auto`}
        >
          <h2 className="font-games text-white text-2xl mb-2">{todo.name}</h2>
        </div>
        <div
          className={`sm:w-[50%] rounded-b-2xl border-t-[1px]
          ${todo.name === "South Korea" && "border-white"}
          ${todo.name === "Japan" && "border-pink-500"} ml-1`}
        >
          <div
            className={`w-full shadow-md
            ${todo.name === "South Korea" && "shadow-white"}
            ${todo.name === "Japan" && "shadow-pink-500"}
            text-gray-500`}
          >
            <p className="ml-2 p-2">{todo.description[0]}</p>
            <br />
            <p className="ml-2 p-2">{todo.description[1]}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="max-w-screen-lg mx-auto">{todoData}</div>;
};

export default Todo;
