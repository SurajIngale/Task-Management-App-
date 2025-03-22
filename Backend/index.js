import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import taskRoutes from "./routes/taskRoutes.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", taskRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
