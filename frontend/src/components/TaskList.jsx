import { useState, useEffect } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="p-4">
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TaskList;
