import { useState } from "react";
import iconCross from "../images/icon-cross.svg";
import iconCheck from "../images/icon-check.svg";

const SingleItem = ({ todo, removeTodo, editTodo, isDarkTheme }) => {
  return (
    <div
      className={
        isDarkTheme
          ? "mx-auto max-w-xl flex flex-row justify-between border-b-2 p-4 py-6 border-vdgb text-white"
          : " mx-auto max-w-xl flex flex-row justify-between border-b-2 border-vlgb p-4 py-6"
      }
    >
      <div className="flex flex-row items-center mx-4">
        <button
          onClick={() => editTodo(todo.id)}
          className={
            todo.completed
              ? "w-8 h-8 rounded-full mr-8 border-2 grid place-items-center bg-check"
              : "w-8 h-8 rounded-full mr-8 border-2 grid place-items-center "
          }
        >
          {todo.completed ? (
            <img
              src={iconCheck}
              alt="checked icon"
              className=" checked-icon w-4 rounded-full"
            />
          ) : (
            ""
          )}
        </button>
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: todo.completed && "line-through",
          }}
        >
          {todo.name}
        </p>
      </div>

      <button type="button" onClick={() => removeTodo(todo.id)}>
        <img src={iconCross} alt="icon" />
      </button>
    </div>
  );
};

export default SingleItem;
