import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const addTask = async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.status(201).json(newTask);
};

export const editTask = async (req, res) => {
    const { title } = req.body;
  
    try {
      const task = await Task.findById(req.params.id);
  
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      // Toggle Status (if current status is Pending → Completed, else Pending)
      const newStatus = task.status === "Pending" ? "Completed" : "Pending";
  
      // Update Task
      task.title = title || task.title; // Update title if provided
      task.status = newStatus;
      await task.save();
  
      res.json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
