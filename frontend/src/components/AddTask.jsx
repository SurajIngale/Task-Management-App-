import { useState } from "react";
import React from "react";
import axios from "axios";

const AddTask = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await axios.post("http://localhost:5000/api/tasks", { title });
    setTitle("");
    refreshTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6 bg-white p-4 rounded-lg shadow-md w-full">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task name..."
      />
      <button 
        type="submit" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
