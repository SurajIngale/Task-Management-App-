import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
});

const Task = mongoose.model("Task", TaskSchema);
export default Task;
