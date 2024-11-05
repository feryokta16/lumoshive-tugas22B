// eslint-disable-next-line no-unused-vars
import React, { useState, createContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

export const LanguageContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [todoId, setTodoId] = useState(1);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const [language, setLanguage] = useState("en");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input) return; // Menghindari penambahan tugas kosong
    const newTask = {
      id: todoId,
      text: input,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setInput("");
    setTodoId(todoId + 1);
  };

  const todoComplete = (id) => {
    setTodos((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTodos((prevTasks) => prevTasks.filter((todo) => todo.id !== id));
  };

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "id" : "en"));
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      <div className="container mt-5">
        <Header />
        <TodoForm
          handleSubmit={addTodo}
          handleInputChange={handleInputChange}
          input={input} // Pastikan untuk mengirimkan input ke TodoForm
        />
        <TodoList
          todos={todos}
          todoComplete={todoComplete}
          deleteTask={deleteTask} // Tambahkan fungsi deleteTask
        />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
