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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 mr-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add Task"
      />
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add</button>
    </form>
  );
};

export default AddTask;
