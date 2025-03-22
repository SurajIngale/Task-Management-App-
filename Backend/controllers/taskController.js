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
  const { id, title, status } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(id, { title, status }, { new: true });
  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
