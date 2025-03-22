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
    const { title, status } = req.body;
  
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,  // Fetch ID from params instead of body
        { title, status },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
  
      res.json(updatedTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
