/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { LanguageContext } from "../App";

function TodoList({ todos, todoComplete, deleteTask }) {
  const { language } = useContext(LanguageContext);
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <div className="d-flex">
            <button
              className="btn btn-warning"
              onClick={() => todoComplete(todo.id)}
            >
              {language === "en" ? "sukses" : "complate"}
            </button>
            <button
              onClick={() => deleteTask(todo.id)}
              className="btn btn-danger btn-sm"
            >
              {language === "en" ? "hapus" : "delete"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
