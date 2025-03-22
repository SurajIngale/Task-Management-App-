import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  // Delete Task
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  // Enable Edit Mode
  const handleEdit = (task) => {
    setEditingTask(task._id);
    setUpdatedTitle(task.title);
  };

  // Update Task
  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { title: updatedTitle });
    
    setTasks(tasks.map(task => task._id === id ? { ...task, title: updatedTitle } : task));
    setEditingTask(null);
  };

  return (
    <div className="p-4">
      {tasks.map(task => (
        <div key={task._id} className="flex items-center justify-between p-2 border rounded-md mb-2">
          {editingTask === task._id ? (
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="border p-1 rounded"
            />
          ) : (
            <span>{task.title}</span>
          )}

          <div>
            {editingTask === task._id ? (
              <button onClick={() => handleUpdate(task._id)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                Save
              </button>
            ) : (
              <button onClick={() => handleEdit(task)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                Edit
              </button>
            )}

            <button onClick={() => handleDelete(task._id)} className="bg-red-500 text-white px-2 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
