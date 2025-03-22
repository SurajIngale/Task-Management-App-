import express from "express";
import { getTasks, addTask, editTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/tasks", getTasks);
router.post("/tasks", addTask);
router.put("/task", editTask);
router.delete("/tasks/:id", deleteTask);

export default router;
