import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const editTask = async (taskId, newTitle, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${taskId}`, {
        title: newTitle,
        status: newStatus,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? response.data : task))
      );
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onEdit={editTask} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
